library(foreign)
library(ggplot2)
library(dplyr)
library (lubridate)
library(splines)
raw_brfss2017 <- read.xport("LLCP2017.XPT")

raw_brfss2017 <- raw_brfss2017 %>%
  mutate(MENTHLTH = ifelse(MENTHLTH == 88, 0, ifelse(MENTHLTH < 31, MENTHLTH, NA))) %>%
  filter(!is.na(MENTHLTH)) %>%
  mutate(INCOME2 = ifelse(INCOME2 < 9, INCOME2, NA)) %>%
  filter(!is.na(INCOME2))


poverty_data <- raw_brfss2017 %>%
  mutate (poor = ifelse(INCOME2 == 1, 1, 0),
          fl = ifelse(X_STATE == 12, 1, 0)) %>%
  group_by(poor, fl, IMONTH) %>%
  summarise(mean_mental = mean(MENTHLTH), sample = n()) %>%
  mutate (group = ifelse(poor ==0 & fl == 0, "Not poor Unaffected",
                         ifelse(poor == 0 & fl == 1, "Not poor Affected",
                                ifelse(poor == 1 & fl == 1, "Poor Affected", "Poor Unaffected"))))

ggplot(poverty_data, aes(x = IMONTH, y = mean_mental)) + 
  geom_point(aes(color = group), size = 1) +
  scale_color_manual(values = c("#00AFBB", "#E7B800" , "#FC4E07", "black")) +
  theme_minimal() +
  geom_smooth(aes(group = group, color = group),method = "lm",formula = y~bs(x),se = FALSE)

library(foreign)
library(ggplot2)
library(dplyr)
library (lubridate)
library(splines)

setwd("~/")
raw_brfss2017 <- read.xport("LLCP2017.XPT")

raw_brfss2017 <- raw_brfss2017 %>%
  mutate(MENTHLTH = ifelse(MENTHLTH == 88, 0, ifelse(MENTHLTH < 31, MENTHLTH, NA))) %>%
  filter(!is.na(MENTHLTH)) %>%
  mutate(INCOME2 = ifelse(INCOME2 < 9, INCOME2, NA)) %>%
  filter(!is.na(INCOME2))


poverty_data <- raw_brfss2017 %>%
  mutate (poor = ifelse(INCOME2 <= 2, 1, 0),
          fl = ifelse(X_STATE %in% c(44,25,9,23,33), 1, 0), #
          datebin = as.Date("2017-01-01") + (yday(mdy(IDATE)) %/% 14 * 14) - 30) %>% # + (as.numeric(IYEAR)-2016) * 365
  group_by(poor, fl, datebin) %>%
  summarise(mean_mental = mean(MENTHLTH), sample = n(), lwr = mean(MENTHLTH) * (1.+1./sqrt(n())), upr = mean(MENTHLTH) * (1.-1./sqrt(n()))) %>%
  mutate (group = ifelse(poor ==0 & fl == 0, "Not Poor, Unaffected",
                         ifelse(poor == 0 & fl == 1, "Not Poor, Affected",
                                ifelse(poor == 1 & fl == 1, "Poor, Affected", "Poor, Unaffected")))) #%>% 
  #filter(datebin > as.Date("2017-01-01") + 90) %>%
  #filter(datebin < as.Date("2017-01-01") + 330)

theme_set(theme_classic(base_size = 18))

ggplot(poverty_data, aes(datebin, mean_mental)) + 
  geom_point(aes(color = group), size = 1) +
  scale_color_manual(values = c("#00AFBB", "#E7B800" , "#FC4E07", "black")) +
  scale_fill_manual(values=c("#00AFBB", "#E7B800" , "#FC4E07", "black")) + 
  theme_classic()+ 
  xlab("Date") + ylab("Mean Poor Mental Health Days")+theme(legend.position="top") +
  theme(legend.text=element_text(size=16))+
  theme(legend.title=element_text(size=16))+
  
  theme(axis.title =element_text(size=16))+
  
  theme(axis.text=element_text(size=16))+
  geom_smooth(aes(group = group, color = group, fill=group),method = "lm",formula = y~bs(x),se = TRUE, size = 2)
  #geom_smooth(aes(y=lwr, group = group, color = group), linetype="dashed", method = "lm",formula = y~bs(x),se = FALSE) +
  #geom_smooth(aes(y=upr, group = group, color = group), linetype="dashed", method = "lm",formula = y~bs(x),se = FALSE) +
  #geom_ribbon(aes(ymin=ymin, ymax=ymax, group=group))

ggsave('~/saved_image.png', width = 16, height = 9, dpi = 300)

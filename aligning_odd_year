# load in usable datasets (2011, 2013, 2015)
invisible(raw_brfss2015 <- readRDS("/VHD/raw_brfss2015.RDS"))
invisible(raw_brfss2013 <- readRDS("/VHD/raw_brfss2013.RDS"))
invisible(raw_brfss2011 <- readRDS("/VHD/raw_brfss2011.RDS"))



common_exercise_vars <-  c("EXERANY2", "EXRACT11", "EXEROFT1", "EXERHMM1",
                           "EXRACT21", "EXEROFT2", "EXERHMM2", "STRENGTH", 
                           "METVL11_", "METVL21_", "FC60_",
                           "ACTIN11_", "ACTIN21_", "PADUR1_", "PADUR2_",
                           "PAFREQ1_", "PAFREQ2_", "X_MINAC11", "X_MINAC21",
                           "STRFREQ_", "PAMIN11_", "PAMIN21_", "PA1MIN_",
                           "PAVIG11_", "PAVIG21_", "PA1VIGM_", "X_PACAT1",
                           "X_PASTRNG", "X_PAREC1", "X_PASTAE1")

#sometimes when the files are read, a '_' is used instead of '.' at the end of variable names. need to check this whenever re-downloading data
ifelse("PAVIG11_" %in% colnames(raw_brfss2015),
       exercise_vars_2015 <- c("EXERANY2", "EXRACT11", "EXEROFT1", "EXERHMM1",
                               "EXRACT21", "EXEROFT2", "EXERHMM2", "STRENGTH",
                               "METVL11_", "METVL21_", "FC60_",
                               "ACTIN11_", "ACTIN21_", "PADUR1_", "PADUR2_",
                               "PAFREQ1_", "PAFREQ2_", "X_MINAC11", "X_MINAC21",
                               "STRFREQ_", "PAMIN11_", "PAMIN21_", "PA1MIN_",
                               "PAVIG11_", "PAVIG21_", "PA1VIGM_", "X_PACAT1",
                               "X_PASTRNG", "X_PAREC1", "X_PASTAE1"),
       exercise_vars_2015 <- c("EXERANY2", "EXRACT11", "EXEROFT1", "EXERHMM1",
                               "EXRACT21", "EXEROFT2", "EXERHMM2", "STRENGTH",
                               "METVL11.", "METVL21.", "FC60.",
                               "ACTIN11.", "ACTIN21.", "PADUR1.", "PADUR2.",
                               "PAFREQ1.", "PAFREQ2.", "X.MINAC11", "X.MINAC21",
                               "STRFREQ.", "PAMIN11.", "PAMIN21.", "PA1MIN.",
                               "PAVIG11.", "PAVIG21.", "PA1VIGM.", "X.PACAT1",
                               "X.PASTRNG", "X.PAREC1", "X.PASTAE1")
)

ifelse("PAVIG11_" %in% colnames(raw_brfss2013),
       exercise_vars_2013 <- c("EXERANY2", "EXRACT11", "EXEROFT1", "EXERHMM1",
                               "EXRACT21", "EXEROFT2", "EXERHMM2", "STRENGTH",
                               "METVL11_", "METVL21_", "FC60_",
                               "ACTIN11_", "ACTIN21_", "PADUR1_", "PADUR2_",
                               "PAFREQ1_", "PAFREQ2_", "X_MINAC11", "X_MINAC21",
                               "STRFREQ_", "PAMIN11_", "PAMIN21_", "PA1MIN_",
                               "PAVIG11_", "PAVIG21_", "PA1VIGM_", "X_PACAT1",
                               "X_PASTRNG", "X_PAREC1", "X_PASTAE1"),
       exercise_vars_2013 <- c("EXERANY2", "EXRACT11", "EXEROFT1", "EXERHMM1",
                               "EXRACT21", "EXEROFT2", "EXERHMM2", "STRENGTH",
                               "METVL11.", "METVL21.", "FC60.",
                               "ACTIN11.", "ACTIN21.", "PADUR1.", "PADUR2.",
                               "PAFREQ1.", "PAFREQ2.", "X.MINAC11", "X.MINAC21",
                               "STRFREQ.", "PAMIN11.", "PAMIN21.", "PA1MIN.",
                               "PAVIG11.", "PAVIG21.", "PA1VIGM.", "X.PACAT1",
                               "X.PASTRNG", "X.PAREC1", "X.PASTAE1")
)

ifelse("METVAL1_" %in% colnames(raw_brfss2011),
       exercise_vars_2011 <- c("EXERANY2", "EXRACT01", "EXEROFT1" , "EXERHMM1" ,
                               "EXRACT02", "EXEROFT2", "EXERHMM2" , "STRENGTH" ,
                               "METVAL1_", "METVAL2_", "FC60_"    ,                    
                               "ACTINT1_", "ACTINT2_", "PADUR1_"  , "PADUR2_"  ,       
                               "PAFREQ1_", "PAFREQ2_", "X_MINACT1", "X_MINACT2",   
                               "STRFREQ_", "PAMIN1_" , "PAMIN2_"  , "PAMIN_"   ,         
                               "PAVIGM1_", "PAVIGM2_", "PAVIGMN_" , "X_PACAT"  ,      
                               "X_PASTRNG", "X_PAREC", "X_PASTAER"),
       exercise_vars_2011 <- c("EXERANY2", "EXRACT01", "EXEROFT1", "EXERHMM1",
                               "EXRACT02", "EXEROFT2", "EXERHMM2", "STRENGTH",
                               "METVAL1.", "METVAL2.", "FC60.",                    #
                               "ACTINT1.", "ACTINT2.", "PADUR1.", "PADUR2.",       #
                               "PAFREQ1.", "PAFREQ2.", "X.MINACT1", "X.MINACT2",   #
                               "STRFREQ.", "PAMIN1.", "PAMIN2.", "PAMIN.",         #
                               "PAVIGM1.", "PAVIGM2.", "PAVIGMN.", "X.PACAT",      #
                               "X.PASTRNG", "X.PAREC", "X.PASTAER")
)

common_covar_names <- c("PHYSHLTH", "MENTHLTH", "SEX", "MARITAL", "ADDEPEV2", "EDUCA", "X_RACE", 'X_AGEG5YR', 'X_BMI5', 'X_BMI5CAT', 'X_RFBING5', 'X_LLCPWT', "X.INCOMG", "EMPLOY")

#this basically performs a check to determine what the covar names are, and whether it has a period in it or an underscrore, and adjusts accordingly.
ifelse("X_RACE" %in% colnames(raw_brfss2015),
       covar_names_2015   <- c("PHYSHLTH", "MENTHLTH", "SEX", "MARITAL", "ADDEPEV2", "EDUCA", "X_RACE", 'X_AGEG5YR', 'X_BMI5', 'X_BMI5CAT', 'X_RFBING5', 'X_LLCPWT', "X_INCOMG", "EMPLOY1"),
       covar_names_2015   <- c("PHYSHLTH", "MENTHLTH", "SEX", "MARITAL", "ADDEPEV2", "EDUCA", "X.RACE", 'X.AGEG5YR', 'X.BMI5', 'X.BMI5CAT', 'X.RFBING5', 'X.LLCPWT', "X.INCOMG", "EMPLOY1")
)

ifelse("X_RACE" %in% colnames(raw_brfss2013),
       covar_names_2013   <- c("PHYSHLTH", "MENTHLTH", "SEX", "MARITAL", "ADDEPEV2", "EDUCA", "X_RACE", 'X_AGEG5YR', 'X_BMI5', 'X_BMI5CAT', 'X_RFBING5', 'X_LLCPWT', "X_INCOMG", "EMPLOY1"),
       covar_names_2013   <- c("PHYSHLTH", "MENTHLTH", "SEX", "MARITAL", "ADDEPEV2", "EDUCA", "X.RACE", 'X.AGEG5YR', 'X.BMI5', 'X.BMI5CAT', 'X.RFBING5', 'X.LLCPWT', "X.INCOMG", "EMPLOY1")
)

ifelse("X_AGEG5YR" %in% colnames(raw_brfss2011),
       covar_names_2011   <- c("PHYSHLTH", "MENTHLTH", "SEX", "MARITAL", "ADDEPEV2", "EDUCA", "RACE2" , 'X_AGEG5YR', 'X_BMI5', 'X_BMI5CAT', 'X_RFBING5', 'X_LLCPWT', "X_INCOMG", "EMPLOY"),
       covar_names_2011   <- c("PHYSHLTH", "MENTHLTH", "SEX", "MARITAL", "ADDEPEV2", "EDUCA", "RACE2" , 'X.AGEG5YR', 'X.BMI5', 'X.BMI5CAT', 'X.RFBING5', 'X.LLCPWT', "X.INCOMG", "EMPLOY")
)


#align covariate variable names 
raw_brfss2015 <- data.table::setnames(raw_brfss2015, old = covar_names_2015, new = common_covar_names)
raw_brfss2013 <- data.table::setnames(raw_brfss2013, old = covar_names_2013, new = common_covar_names)
raw_brfss2011 <- data.table::setnames(raw_brfss2011, old = covar_names_2011, new = common_covar_names)


#align exercise variable names
aligned_brfss2015 <- data.table::setnames(raw_brfss2015, old=exercise_vars_2015, new = common_exercise_vars)
aligned_brfss2013 <- data.table::setnames(raw_brfss2013, old=exercise_vars_2013, new = common_exercise_vars)
aligned_brfss2011 <- data.table::setnames(raw_brfss2011, old=exercise_vars_2011, new = common_exercise_vars)


saveRDS(aligned_brfss2015, '/VHD/aligned_brfss2015.RDS')
saveRDS(aligned_brfss2013, '/VHD/aligned_brfss2013.RDS')
saveRDS(aligned_brfss2011, '/VHD/aligned_brfss2011.RDS')

rm(raw_brfss2015, raw_brfss2013, raw_brfss2011) #remove dataframes now finished with them
rm(aligned_brfss2015, aligned_brfss2013, aligned_brfss2011) #remove dataframes once saved as RDS files

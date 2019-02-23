#check for libraries that are needed, install those that aren't present, and load all libraries
libraries <- c('foreign')
presentLibs <- libraries %in% rownames(installed.packages())
invisible(if(any(!presentLibs)) install.packages(libraries[!presentLibs]))
invisible(lapply(libraries, require, character.only=TRUE))

setwd('/VHD/exercise') #need to set the path to where you have the code repository here
source ("./scripts/00_HelperFunctions.R") #call the helperfunctions script to load functions and variables used here


#Download BRFSS data from 2011, 2013 and 2015
link <- c("http://www.cdc.gov/brfss/annual_data/2017/files/LLCP2017XPT.zip", 
          "http://www.cdc.gov/brfss/annual_data/2015/files/LLCP2015XPT.zip",
         "http://www.cdc.gov/brfss/annual_data/2013/files/LLCP2013XPT.ZIP",
         "http://www.cdc.gov/brfss/annual_data/2011/files/LLCP2011XPT.ZIP")

filename <- c("BRFSS_data_2017.zip", "BRFSS_data_2015.zip", "BRFSS_data_2013.zip","BRFSS_data_2011.zip")


# read in the downloaded data files
brfss2015 <- read.xport('/VHD/LLCP2015.XPT ') #after the file extension there seems to be a space... not sure why, but oh well
dim(brfss2015)
 #just print if any exercise variables are missing
#441456 entries, 330 variables

brfss2013 <- read.xport("/VHD/LLCP2013.XPT") 
#491773 entries, 336 variables
#again print to check if any variables are missing

brfss2011 <- read.xport("/VHD/LLCP2011.XPT")
dim(brfss2011)
#506467 entries, 454 variables
#print any missing variables

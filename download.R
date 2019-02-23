#check for libraries that are needed, install those that aren't present, and load all libraries
libraries <- c('foreign', 'tidyverse')
presentLibs <- libraries %in% rownames(installed.packages())
invisible(if(any(!presentLibs)) install.packages(libraries[!presentLibs]))
invisible(lapply(libraries, require, character.only=TRUE))

#call the helperfunctions script to load functions and variables used here

wd <- getwd()

#Download BRFSS data from 2011, 2013 and 2015
link <- c("http://www.cdc.gov/brfss/annual_data/2017/files/LLCP2017XPT.zip", 
          "http://www.cdc.gov/brfss/annual_data/2015/files/LLCP2015XPT.zip",
         "http://www.cdc.gov/brfss/annual_data/2013/files/LLCP2013XPT.ZIP",
         "http://www.cdc.gov/brfss/annual_data/2011/files/LLCP2011XPT.ZIP")

 download_file <- function (link, filename){
  path <- paste(wd, filename, sep ="/")
  download.file(url = link, destfile = path, method = "wget")
  unzip(path, exdir = wd)
  extract_name <- unzip(path,list =TRUE)[1,1]
  #remove_code <- paste ("rm", "-rf", path, sep = " ")
  #system(remove_code)
   #get the file name
  return (extract_name)
}
          

filename <- c("BRFSS_data_2017.zip", "BRFSS_data_2015.zip", "BRFSS_data_2013.zip","BRFSS_data_2011.zip")
for(i in seq(1,length(filename),by=1)){
  if(!file.exists(filename[i])){
    download_file(link[i], filename[i])
  }
}
          
  

# read in the downloaded data files
brfss2015 <- read.xport('/LLCP2015.XPT ') #after the file extension there seems to be a space... not sure why, but oh well
dim(brfss2015)
 #just print if any exercise variables are missing
#441456 entries, 330 variables

brfss2013 <- read.xport("/LLCP2013.XPT") 
#491773 entries, 336 variables
#again print to check if any variables are missing

brfss2011 <- read.xport("/LLCP2011.XPT")
dim(brfss2011)
#506467 entries, 454 variables
#print any missing variables

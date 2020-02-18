cleanOut <- out[,c(2,4,5,6,7,8,9)]
cleanOut$colorRange <- abs(cleanOut$backgroundColor - 
                             cleanOut$popoutColor)
out2 <- subset(cleanOut, user!=1)
out2 <- out2[order(out2$colorRange),]


x <- c(0,1,2,3,4,5)
y<- 6
for(val in x){
  bin <- subset(out2, difBin==val)
  ba <- nrow(subset(bin, selection=='True'))
  bt <- nrow(bin)
  error <- log2(abs(ba - bt) + (1/8))
  print(error)
  y[val+1] = error
}
z <- c('0-9 hsl Hue Difference','10-19 hsl Hue Difference','20-29 hsl Hue Difference','30-39 hsl Hue Difference','40-49 hsl Hue Difference','50-57 hsl Hue Difference')
print(z)
f <- c(1,2,3,4,5,6)

dotchart(y,labels=z,cex=.7,
         main="log error for binned hue differences",
         xlab="log error")






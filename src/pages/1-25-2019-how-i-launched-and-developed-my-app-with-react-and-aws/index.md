---
path: "/how-i-launched-and-developed-my-app-with-react-and-aws"
date: "2019-01-25"
title: "How I Launched and Developed my App With React and Amazon Web Services"
---

After working on my application https://discover-machinelearning.com for the past 7 months I have finally launched it. In this blog post I want to detail how I managed to develop it and launch it. 

Originally I wrote the app using Redux and developing my own servers. However, in early January when I came to launch my servers to EC2 AWS servers I figured Firebase would offer a nicer solution thanks to the ability to scale easily, add social authentication, and have peace of mind when it comes to security. 

When I refactored my code to Firebase, I made use of React Context API instead of Redux. I followed https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/ which is a great tutorial on how to integrate Firebase with your React application. 

I personally really enjoy this tutorial. It covers everything you would want to know about React Context API especially to someone new to it and its ideas. It covers everything from Signing up, Signing in, Logging out and more things like protected routes, firebase realtime database, a forgot password feature, etc. It is a one-stop shop for everything you would want to know to integrate Firebase into React.

After I successfully got rid of Redux and my server for React Context API and Firebase it was time to deploy my app. 

# Launching the App

### #1 AWS S3 Bucket
Push everything to AWS. The first step is to push your code to an AWS S3 bucket. You can set up a bucket using a tutorial and then when the time comes you can download the AWS cli in order to push your code. I made a npm script to deploy the app: 

`"deploy": "aws s3 sync build/ s3://discover-machine-learning"`

That way, whenever I had a change I would want to implement I could simply build the app with create-react-app’s build script and then deploy it to my S3 bucket.

I recommend following this tutorial https://medium.com/ovrsea/deploy-automatically-a-react-app-on-amazon-s3-iam-within-minutes-da6cb0096d55 to launh your app onto S3

### #2 Amazon Cloudfront
After we are done with S3 we want to utilize Cloudfront in our application Amazon Cloudfront is used to speed up the distribution of static and dynamic web content and deliver content through a world network of data centers. It can also be used to give your app HTTPS for added security.

There are many great Medium and YouTube tutorials to set up your Cloudfront with your S3 and after you should be able to access your website at your cloudfront URL. 

### #3 Domain Name
Right now, the URL is really weird as cloudfront gives you a long cloudfront.net URL. You want to get a domain name to give to others. 

Originally, I was going to get a `.tech` domain as I figured it would be the cheapest. However, coming to checkout I realized that I would have to pay a fee for privacy protection to keep my privacy safe from WHOIS databases. Because of this, I started doing research and found Google Domains. 

I love Google Domains. You can find a lot of good domains such as `.com .net .org`, etc for pretty good prices. I managed to purchase my domain `discover-machinelearning.com` for 17 dollars Canadian. The nice thing about Google Domains is that privacy protection is free with the domain, so not only am I getting a nicer more recognizable domain with `.com	` but I am saving 8 Canadian dollars thanks to privacy protection being built in. Win-win. 

After purchasing your domain you can start working on AWS, to use a domain name with your Cloudfront distribution you are required to use Route 53. Route 53 is a nice way to get your domain configured with your app however, keep in mind you need to pay $0.50 a month.

https://www.youtube.com/watch?v=D6qB7MEFOe0

I like this tutorial when it comes to configuring Route 53. The instructor walks through every step you need to take to finish your application. 

Some things I had trouble with that you need to take into account: 
Make sure that in Google Domains under DNS you configure a DNS server. Click `Use custom name servers` and paste your name servers from AWS. 
Under the DNS tab in Google Domains under Custom resource records you want to make sure that you add the CNAME from Route 53 in AWS as that is your domain name provider. Simply add it, set the name to the Route 53 issued name set it to type `CNAME` the `TTL` section can stay default and you can add the data field issued from AWS. 

Good luck deploying your app and congratulations on finishing your React app!

Feel free to support me or ask questions on my website: 
https://azbo400.github.io

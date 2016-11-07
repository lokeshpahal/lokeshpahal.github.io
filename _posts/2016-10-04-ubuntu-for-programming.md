---
layout: post
title: Configure Ubuntu for programming workstation 
categories: [workstation, setup, development]
tags: [development, setup]
fullview: true
comments: true
permalink: /:day/:month/:year/:title/
---

somehow I messed up with my Ubuntu workstation, my bad luck :( . I was using this for python and php programming since one and half year.
So I am going step by step to install all neccessary packages and softwares. 
##### Hope this will help someone else there.

### Step 1: Configure LAMP

There are lot of ways to Configure Apache server with Mysql and PHP but I will follow the simeplest one. I am using **tasksel** fot this. 
> `Tasksel is a tool in Ubuntu / Debian, which helps to install multiple related packages as a co-ordinated task.`

* install **tasksel** using ubuntu **Advanced Packaging Tool** `apt-get`.<br/> 
    `user@ubuntu:~$ sudo apt-get install tasksel` <br/>
    you have to choose mysql root password in end of process, that will be used to access mysql database.

* install phpmyadmin to access mysql <br/>
    `user@ubuntu:~$ sudo apt-get install phpmyadmin`


### Step 2: Configure Python
In Ubuntu latest releases Python 2.7 is already pre-installed but we need to install python dev tools and other liberaries for development.

#### python development liberaries 
* build-essential
* python2.7-dev
* libxml2-dev
* libxslt1-dev
* python2.7-mysqldb
* libmysqlclient-dev

`user@ubuntu:~$ sudo apt-get install -y build-essential python2.7-dev libxml2-dev libxslt1-dev python2.7-mysqldb libmysqlclient-dev`

#### python pip and virtualenv
> `pip is a package management system used to install and manage software packages written in Python.`
> `A Virtual Environment is a tool to keep the dependencies required by different projects in separate places,`
> `by creating virtual Python environments for them.`

* install pip <br/>
    `user@ubuntu:~$ sudo apt-get install python-pip`

* install virtualenv <br/>
    `user@ubuntu:~$ sudo pip install virtualenv virtualenvwrapper` <br/>
    now you can init you virtualenv for a project, for this you need to decide you working directory and changed to that directory `cd /home/user/myproject/` <br/>
    `user@ubuntu:/home/user/myproject/$ virtualenv env` <br/>

### Step 3: Configure Ruby
For Ruby we will user `RVM` to install latest or specific version of Ruby.
* First you need to add repo to your ubuntu system and then update to install<br/>
    `user@ubuntu:~$ sudo apt-add-repository -y ppa:rael-gc/rvm`<br/>
    `user@ubuntu:~$ sudo apt-get update`<br/>
    `user@ubuntu:~$ sudo apt-get install rvm`

* Installing Specific Ruby<br/>
    `user@ubuntu:~$ rvm install ruby_version`

### Step 4: Configure Nodejs amd other front-end tools line grunt bower
> `Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.`

* install nodejs, We will be using `NVM` to manage node version, its a best way to use multiple nodejs versions. <br/>
    `user@ubuntu:~$ curl https://raw.githubusercontent.com/creationix/nvm/v0.25.0/install.sh | bash` <br/>
    now use `NVM` to install specific version. <br/>
    `user@ubuntu:~$ nvm install 4.0`

* we will also install other tools to make it work<br/>
    `user@ubuntu:~$ sudo apt install nodejs-legacy`<br/>
    `user@ubuntu:~$ sudo apt-get install npm`<br/>

* install `Grunt` <br/>
    `sudo npm install -g grunt-cli`<br/>
    used `-g` flag to make it available globally.

<br/><br/>
##### I think we have installed all neccessary packages to ready for development, please [comments here](/04/10/2016/ubuntu-for-programming/) if missed something. Thanks, happy coding:)








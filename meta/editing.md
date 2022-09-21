# Editing Guide

This is a guide to help people contribute content or manage contribution of content. Focus is on the "wiki" content stored in markdown -- which is all pages except the front page and a few special generated pages e.g. 

## Introduction

The [Making Sense of Crypto and Web3](https://web3.lifeitself.us/) website is a wiki site: a collaborative site where users can add or otherwise edit content. This guide is for users who wish to add or edit content on the site, such as key concepts or ideologies in the [Guide](https://web3.lifeitself.us/guide) section or sensemaking in the [Claims](https://web3.lifeitself.us/claims) section.


### How does the site work?

All the content for the [Making Sense of Crypto & Web3 website](https://web3.lifeitself.us/) is contained within the life-itself/web3 [Github repo](https://github.com/life-itself/web3). 

You will find the wiki content mostly in the folders ‘claims’ and ‘concepts’. 


#### Technical Architecture

The website is written in Markdown. A tool called content layer converts the Markdown files into HTML (the standard computer language for displaying and formatting web pages) so that they are displayed as pages on the site. This is the case for all pages on the website except for the homepage which is written directly in HTML. 

#### Markdown

Markdown is a markup language (computer language for displaying and formatting  web pages), which is designed to be easy to write and easy to read. It’s widely deployed on the web, for example by DataHub, GitHub, Stackoverflow and many other sites.

In Markdown, you control the display of the document. For instance, you can format words as bold or italic, add images, create lists, and much more. Mostly, Markdown is just regular text with a few non-alphabetic characters thrown in, like ## or **.

Head over to our [Markdown Guide](https://playbook.datopian.com/markdown/#why-markdown) to learn more about Markdown and how to use it.

#### Front Matter 

In the world of computer programming, front matter is metadata (data about data) at the top of a file. Front matter does two things: a) it displays key info about a page (such as its title and description) in a structured way which helps with a consistent layout throughout the site and b) is used as metadata for SEO (search engine optimization) purposes, helping our content to reach interested readers. 

##### Using front matter

Front matter should always be at the very top of the Markdown file, marked out by three dashes (---) above and below.

Our front matter template can be found at the top of this [template document](https://github.com/life-itself/web3/blob/main/templates/template.md). 

You can copy and paste this into the Markdown file you are editing and fill in the appropriate fields. Note: All fields above are optional. Remove (or leave empty) the fields that are not in use to eliminate any errors during build. It is preferable to have at least a title and a description in the front matter for every page. 

Remember to include the three dashes above and below and to paste at the very top of the file. 

#### Episode notes/deep dive pages

Note that the template for episode notes/deep dive pages which accompany video conversations is [here](https://github.com/life-itself/web3/blob/main/templates/template.md). 

## How to edit the website

There are two methods for making edits to the website:

1. Edit directly in Github
2. Edit on your local machine (using a code editor or Obsidian)

The first method is the most simple method. The second is more technical. 

If you run into any issues while following this guide, please [let us know](https://lifeitself.us/contact/) so we can improve this guide to help future contributors.

### Video tutorial

Some of the steps in the instructions below are also demonstrated in this [video tutorial](https://drive.google.com/file/d/1mWqXDx6ICJ_1qreoYoB774weWi-AtyDo/view). References to the video tutorial are given as timestamps in brackets.

### Method 1: Edit directly in Github

#### Setup

* Create a [GitHub](https://github.com/) account if you don’t already have one

#### Key steps

* Go to the repo storing the website content: [https://github.com/life-itself/web3](https://github.com/life-itself/web3) 
* Look for the file that corresponds with the page you want to edit. To find the file, it might help to look at the page URL. E.g. To find the file containing the “Blockchain” page ([https://web3.lifeitself.us/concepts/blockchain](https://web3.lifeitself.us/concepts/blockchain)), go to the folder “concepts“, then the file “blockchain.md”.  
* Click on the pencil icon in the upper right corner to edit this file
* Make your edits
* Once you’ve made your edits, go to the bottom of the page where you will see a box titled ‘Propose changes’. Type into the first text box below ‘Propose changes’ a brief description of the edits you have made. E.g. ‘fix typo’, ‘add citation’ or ‘expand definition’. Use the box below that for optional further description of your edits. 
* Then click the button that says ‘Propose changes’. 
* Once you’ve clicked the ‘Propose changes’ button you will be taken to a new page. Here, click the button that says ‘Create pull request’. This will notify a team member to review and confirm the edits you’ve made.
* Once they’ve done that, your edit will appear on the site! Thanks for contributing! 

### Method 2: Edit on your local machine (using a code editor or Obsidian)

Method 2 is more technical and involves a_ fork -> clone -> branch -> edit -> pull request_ workflow which is standard for contributing to open source GitHub projects. 

In the _edit_ stage of the workflow – where you edit the Markdown file corresponding to the page you wish to edit – you can choose to use a code editor, such as Visual Studio Code (one of the most popular code editors), or Obsidian. For some people, Obsidian is a more familiar, more comfortable way to edit files. It also lets you preview what your edits will look like (13:05-15:26). For Obsidian, take a look at the [video tutorial](https://drive.google.com/file/d/1mWqXDx6ICJ_1qreoYoB774weWi-AtyDo/view) starting from 09:45.

#### Setup

* Create a [GitHub](https://github.com/) account if you don’t already have one
* Download [VS Code](https://code.visualstudio.com/) or [Obsidian](https://obsidian.md/). You can use whichever one you prefer. This is what you’ll use to view and edit the website’s Markdown files.

#### Key steps

##### Stage 1: Fork

In this stage, you ‘fork’ the Life Itself Web3 repository, i.e. you make a remote copy of the repository in your own GitHub account. If you’ve forked the repo before, skip this stage.

* Go to the repo storing the website content: [https://github.com/life-itself/web3](https://github.com/life-itself/web3) (0:00-0:02)
* Click the ‘Fork’ button in the upper right-hand corner of the repo page to fork the repository

##### Stage 2: Clone

In this stage, you ‘clone’ your forked repository, i.e. you copy your forked version of the Life Itself Web3 repo to your computer so that you can make edits on your local machine without affecting the remote git repo. 00:40-01:50 of the [video tutorial](https://drive.google.com/file/d/1mWqXDx6ICJ_1qreoYoB774weWi-AtyDo/view) corresponds to this stage. _If you’ve cloned the forked repo before, skip this stage._
* Search your computer for its ‘terminal’ and open it. The terminal is simply a text-based way of interacting with the computer through commands. In the terminal, you can type commands, manipulate files, execute programs, and open documents. (00:03-00:39)
* On your forked repo page (make sure you’re not on the main repo page), click the green ‘Code’ button and copy the HTTPS link
* Type into Terminal cd < directory >, where < directory > is replaced by the path to the folder you want to navigate to. E.g. “cd Desktop/Folder/life_itself/tutorial”. On a Mac, you can drag the folder to the terminal after typing “cd”. Otherwise, you can find the folder path [Mac](https://www.howtogeek.com/721126/3-ways-to-see-the-current-folder-path-on-mac/#:~:text=Open%20a%20Finder%20window%2C%20and,path%20to%20the%20current%20folder.); [Windows](https://www.wikihow.com/Find-a-File%27s-Path-on-Windows) and type or paste it in manually.
* What you’re doing here is navigating in Terminal to the folder on your computer where you want to save the cloned repository (i.e. changing the working directory). Normally, on your computer you do this by searching for a folder and clicking on the icon to open it. In Terminal, you do this by typing commands. The command for changing directory is: cd &lt;directory>. (00:40-1:11)
* Type into Terminal the command “git clone” and then paste the repo URL you copied. E.g. “git clone https://github.com/life-itself/web3.git”. Press enter. (1:13-1:48)
    * N.B. When you try this, you may be prompted to install command line developer tools to be able to run git commands, e.g. XCode for Mac. If this is the case, follow the instructions for installation.

##### Stage 3: Branch

In this stage, you create a new ‘branch’, or temporary version, of the repository on which to make edits. These edits will later be merged with the main repository branch.
    
* Navigate in Terminal to the Life Itself Web3 repo which has been cloned to your computer. To do this, type “cd web3” or “cd < directory >” (as in Stage 2). Press enter. (1:49-2:02)
* Update your local clone of the remote repository. _You don’t need to do this if you’ve only just cloned the repo just now._
    * Type into Terminal “git pull”. Press enter.
* Create a branch on which to make edits 
    * Type “git checkout -b < your_branch_name >”. E.g. you might name your branch “edits”. So you would type “git checkout -b edits”. This command will create a new branch and switch you to this branch. N.B. the branch name cannot contain spaces.

##### Stage 4: Edit

In this stage, you use either a code editor, such as VS Code (see 4a), or Obsidian (see 4b) to view and edit the website’s Markdown files.

###### 4a: VS Code

* Open VS Code
* Click the ‘Explorer’ icon at the top left hand side of the window. Then click ‘Open Folder’ to open the Life Itself Web3 repo which you cloned. You will then be able to see the list of folders from the repo on the left side of the window. (2:03-3:35)
* Find the file that corresponds with the page you want to edit.* (3:31-4:03)
* Make your edits and save


###### 4b: Obsidian

* Open Obsidian
* Open the cloned github repo folder as a vault (10:07)
* Find the file that corresponds with the page you want to edit.* 
* Make your edits and save. 
    * See video tutorial (13:05-15:26) for info on useful Obsidian features such as shortcuts for linking to other pages.

*N.B. To find the file that corresponds with the page you want to edit, it might help to look at the page URL. E.g. To find the file containing the “Blockchain” page ([https://web3.lifeitself.us/concepts/blockchain](https://web3.lifeitself.us/concepts/blockchain)), go to the folder “concepts“, then the file “blockchain.md”.

##### Stage 5: Pull request

In this stage, you prepare the changes you have made (and saved) to a Markdown file to be published on the website.

* Go to your computer’s Terminal (4:59-5:08)
* Type “git status”. Press enter. (5:09-5:30)
* Type “git add < name of modified file >”. E.g. “git add site/content/test.md”. Press enter. (5:31-6:06) If you’ve edited more than one file, you can type “git add .” to add all the modified files with one command.
* Type “git commit -m “< description of edit >””. E.g. “git commit -m “fix typo”” or “git commit -m “add extra text to definition””.  Press enter. Note that the description of the edit must be in double quotation marks. (6:07-7:01)
* Type “git push origin <your_branch_name>”, replacing <your_branch_name> with the name of the branch you create.
*  Submit your changes for review: Go to your Github repo and click on the “Compare & pull request” button. Add a description and submit the pull request.
*  Someone from our team will review and confirm the merge. Once they’ve done that, your edit will appear on the site! Thanks for contributing! 

##### Resolving merge conflicts

On occasion, it is possible that after submitting a pull request you may get a message flagging merge conflicts. This could be because when you were making your changes, someone else might have pushed new changes to the same content you were editing. If this happens, see here for what to do to [resolve a merge conflict](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line).

# Glossary

* Repo => short for [Repository](https://docs.github.com/en/get-started/quickstart/github-glossary#repository). Contains all a project’s files.
* Working directory => The folder you are currently working in.

# Contact

If you run into any issues while following this guide, please [let us know](https://lifeitself.us/contact/) so we can improve this guide to help future contributors.


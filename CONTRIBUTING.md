SGR Contributions guide
=======================

This doc explains the rules and guide lines to contribute on SGR project.

Prerequisites
-------------

To be able to contribute on SGR project, you will need :

- NodeJS (v6.0)
- [Commitizen](https://github.com/commitizen/cz-cli) installed globally

New contributor
---------------

So, you are a new comer and you would like to know how to contribute to this project step by step ?

You are in the good place !

The first thing to help us on SGR project, it's to find a issue on the [project view](https://github.com/js-republic/SGR/projects/1) on github.

Prefer take an issue not yet in the *Work in progress*. Each issue, except bugs, are attached to an 'parent' issue called an *Epic* that described all the feature.

How the project view works
--------------------------

In the [project view](https://github.com/js-republic/SGR/projects/1), you can see four columns : *Ideation* -> *Todos* -> *Work in progress* -> *Done*

- *Ideation* : Is the step where Epics are debated. The Epic come from the core team or are voted on [Feathub](http://feathub.com/js-republic/SGR).
An Epic will list all stories attached to him.
- *Todos* : In this step, the epics, and the stories a defined and wait for contributor (maybe you :tada:). 
If someone wants work on a story, it can add a comment on it and core team will pass the story in next column.
- *Work in progress* : Contains all stories currently developed. To be done, each story must be implemented in a pull-request, have well designed commit history, covered by unit tests and finally submit and reviewed by the core commiter team.
- *Done* : The final step, this column contains all finished stories


Pull requests
-------------

All pull requests are welcome. You should create a new branch, based on the **master branch**, and submit the PR against the it.

Your branch name must be explicit like this : feature/componentWeather. All development branch must starts with feature/yourFeature and must be a reference to an issue.

Each branch will be reviewed and improved if necessary with a core-commiter.

**Your branch must have unit tests ! All PR without Unit test will not be accepted.**

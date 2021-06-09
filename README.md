# eugbel13

This is currently an example Ansible setup to install Confluence.

`everything.yml` contains a full list of tasks considered when attempting an installation. Tasks are added as more requirements become apparent.

`hosts.yml` is an attempt at separating our hosts by environment. 
Contains variables for each group to make installation playbook run dynamically based on the environment.
To do:
- Separate variables into their own files?

`test_install.yml` is a test playbook for testing specific steps of the process. Currently tasks are copied from `everything.yml` with less dynamicism. Written to run on a localhost

Successfully tested:
- Installing confluence using ansible's command module assuming the bin and response.varfile are already present

Still needs to be tested:
- Use Get_URL module to download installer
- Full vanilla installation: download bin, copy down response.varfile and run installer in one shot
- Running the plays from a remote machine
- Doing the full remote installation using variables to dynamically grab the bin and config files
	- Still need to create confluence.conf
- Actual proper testing of copying down and maintaining config files in QA+

Stretch goals (not necessary for immediate success but need to be considered):
- Plugin installation and management
	- JavaMelody?

More to consider:
- Any packages need to be installed before confluence can be installed?
	- JDBC Drivers?
		- C:\Program Files\Atlassian\Confluence\confluence\WEB-INF\lib
		- /opt/atlassian/confluence/confluence/WEB-INF/lib
	- New Relic / Monitoring
- How best to integrate into im-platform github
- How are we expected to run these in reference to the ansible machines?
	- Do we need to use the service account usernames / passwords in our plays? How?
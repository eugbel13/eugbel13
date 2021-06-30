# eugbel13

This is currently an example Ansible setup to install Confluence.

Still needs to be tested:
- Running the plays from a remote machine
- Doing the full remote installation using variables to dynamically grab the bin and config files
	- Still need to create confluence.conf
- Actual proper testing of copying down and maintaining config files in QA+

Successfully tested:
- Installing confluence using ansible's command module assuming the bin and response.varfile are already present
- Use Get_URL module to download installer
- Full vanilla installation: download bin, copy down response.varfile and run installer in one shot
- Upgrading a preexisting installation of Confluence
	- The instance needs to be started and properly setup before the upgrade can process successfully.

Stretch goals (not necessary for immediate success but need to be considered for long-term completion):
- Plugin installation and management
	- JavaMelody?
- Monitoring

New Playbook / Roles Ideas
- Create 
- Update Plugins

More to consider:
- Any packages need to be installed before confluence can be installed?
	- JDBC Drivers?
		- C:\Program Files\Atlassian\Confluence\confluence\WEB-INF\lib
		- /opt/atlassian/confluence/confluence/WEB-INF/lib
	- New Relic / Monitoring
		- Java Agent
		- Infrastructure Agent
- How best to integrate into im-platform github
- How are we expected to run these in reference to the ansible machines?
	- Do we need to use the service account usernames / passwords in our plays? How?
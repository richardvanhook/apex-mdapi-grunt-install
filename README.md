If you're familiar with grunt and [grunt-ant-sfdc](https://github.com/kevinohara80/grunt-ant-sfdc), then this project represents a quick way to install [apex-mdapi](https://github.com/financialforcedev/apex-mdapi) to an org.

## Dependencies

* [grunt](http://gruntjs.com/installing-grunt)

## Steps

    $ git clone https://github.com/richardvanhook/apex-mdapi-grunt-install
    $ cd apex-mdapi-grunt-install
    $ npm install
    $ export SFSERVERURL=REPLACE_ME
    $ export SFUSER=REPLACE_ME
    $ export SFPASS=REPLACE_ME
    $ export SFTOKEN=REPLACE_ME
    $ grunt

## Notes

* You'll need to manually add the tabs from [apex-mdapi](https://github.com/financialforcedev/apex-mdapi) to one or more projects.

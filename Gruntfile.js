'use strict';

module.exports = function(grunt) {
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['apex-mdapi'],
        shell: {
            options: { stderr: false },
            git_clone_apex_mdapi: {
                command: 'git clone https://github.com/financialforcedev/apex-mdapi.git'
            }
        },
        antdeploy: {
            options: {
                root: 'apex-mdapi/apex-mdapi/src',
                version: '31.0',
                useEnv: true,
                existingPackage: true
            },
            all:{}
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-ant-sfdc');

    grunt.registerTask('default', ['clean','shell','antdeploy']);


};
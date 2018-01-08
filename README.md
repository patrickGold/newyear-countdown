# newyear-countdown

Web app that counts down to next January 1st. It selects automatically the next year (based on local system time). Background images are made with svg inline tags.

See a preview: https://patrickgold.github.io/newyear-countdown/

### Following bug has been fixed since version 2018-01-08:

On iOS Safari Browser, the following won't work:<br>
```var date = new Date("2018-01-01"); ```

Instead you have to write the following:<br>
```var date = new Date("2018/01/01"); ```

The new version of the Date() now includes a slash instead of a "-". This is now compatible to all of the major browsers.


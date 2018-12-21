# newyear-countdown

Web app that counts down to next January 1st. It selects automatically the next year (based on local system time). Background images are made with svg inline tags.

See a preview: https://patrickgold.github.io/newyear-countdown/

## Changelogs

### Version 2018-12-21:

- Animated "Happy New Year" message.
- Clouds now move on the screen.
- Design & performance optimization.
- Now using BEM naming convention for better further development.
- Added "Fork me on GitHub" banner.

### Version 2018-01-08:

- Bugfix for users using Safari Browser:<br>
    On iOS Safari Browser, the following won't work:<br>
    ```var date = new Date("2018-01-01"); ```<br>
    Instead you have to write the following:<br>
    ```var date = new Date("2018/01/01"); ```<br>
    The new version of the Date() now includes a slash instead of a "-". This is now compatible to all of the major browsers.

## Author
* [Patrick Goldinger](https://github.com/patrickgold)

## License

Licensed under the [MIT License](LICENSE).



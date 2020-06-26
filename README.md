# WHCC Developer Skill Test
Please create a private fork from this repo. 
Please add https://github.com/jameswnelson to your repo as a collaborator when you're done.

# Description
Complete this web-based news reader that leverages the Hacker News API.
Some work has already been done in the index.html file.
Please do not use a framework, just vanilla javascript or typescript.
You may use webpack, babel, or any other compiler you're comfortable with.
You may also use ES6, do not worry about supporting ES5.
Try to timebox your work to approximately 1-2 hours.

# Requirements
1. The app will display a list of the most recent Hacker News stories in descending order.
1. Each story list item should show the title, the author's name, and the time it was posted.
1. The users are very impatient so please display each story as soon as it is fetched.
1. The app should support infinite scrolling. When a user reaches the bottom of the page it should load more stories.
1. The app should be appealing to users on both desktop and mobile, please style it to the best of your ability.

# Core Values of Design
1. Polsihed simplicity in the user experience and aesthetic.
1. Focus on empathy for the user’s experience.

# Resources
1. Hacker News API: https://github.com/HackerNews/Api
1. Hacker News: https://news.ycombinator.com/news

# Discussion Notes
1. What decisions did you make before you began development?

To keep the code as simple as possible (and accomplishable within the timebox), I decided not to use a server and keep all of my code clientside. I decided the only files I would create would be an index.html, a client.js, and a styles.css.

2. How did you decide what to work on in order to meet the time constraint?

The requirements appeared to be ordered by priority level - i.e., by necessity one would need to fetch the Hacker News stories before displaying the title, author, and time posted - so I worked my way down the list.

3. What was your decision making process for your code organization?

The directive given was straightforward and, particularly with the use of vanilla JS and no frameworks, it made sense not to complicate the code too much with extra files, imports, exports, etc. I stuck to what I needed to make a clean and well-designed product.

4. If you had more time, what would you have implemented?

There is always more design work to be done, so some more CSS tweaks would definitely have been in order. I also was unable to figure out server setup with vanilla javascript within the timebox, but server setup is something I wanted to explore further in order to get all of the heavy lifting off of the clientside. (It doesn't seem necessary, but it's something I would like to know how to do for the future.)

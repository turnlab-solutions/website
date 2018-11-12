import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>#100DaysOfCode challenge - Activity log</h1>
    <h3>Day 1 - October 23, Tuesday, 2018</h3>
    <p><strong>Today's Progress</strong>: Deploy Gatsby Website for my Turnlab Solutions website (portfolio) using Netlify<br />
    <strong>Thoughts:</strong> For the first 30 days I'll do Javascript 30 and publish my projects on this website<br />
    <a target="_blank" href="https://turnlab.solutions">Link to work</a><br />
    </p>
    <h3>Day 2 - October 24, Wednesday, 2018</h3>
    <p>
    <strong>Today's Progress</strong>: Did the first challenge of Javascript 30<br />
    <strong>Thoughts:</strong> That was fun I had never needed the audio html element before<br />
    <a target="_blank" href="https://maxletourneur.github.io/JavaScript30/01%20-%20JavaScript%20Drum%20Kit/">Link to work</a><br />
    </p>
    <h3>Day 3 - October 25, Thursday, 2018</h3>
    <p>
    <strong>Today's Progress</strong>: Made a JS clockface day for #2 of Javascript 30<br />
    <strong>Thoughts:</strong> Reminded me that CSS transform/animations are the fundations for a UI where nothing is created, everything is transformed from one view to the next...<br />
    <a target="_blank" href="https://maxletourneur.github.io/JavaScript30/02%20-%20JS%20and%20CSS%20Clock/">Link to work</a><br />
    </p>
    <h3>Day 4 - October 26, Friday, 2018</h3>
    <p>
    <strong>Today's Progress</strong>: Played with CSS variables and image filter for #3 of Javascript 30<br />
    <strong>Thoughts:</strong> HTML color picker is still not supported on iOS (displays as input text) Shout out to Android for handling it beautifully!<br />
    <a target="_blank" href="https://maxletourneur.github.io/JavaScript30/03%20-%20CSS%20Variables/">Link to work</a><br />
    </p>
    <h3>Day 5 - October 27, Saturday, 2018</h3>
    <p>
    <strong>Today's Progress</strong>: Array functions cardio for #4 of Javascript 30<br />
    <strong>Thoughts:</strong> Array prototype is power!<br />
    <a target="_blank" href="https://maxletourneur.github.io/JavaScript30/04%20-%20Array%20Cardio%20Day%201/">Link to work</a><br />
    </p>
    <h3>Day 6 - October 28, Sunday, 2018</h3>
    <p>
    <strong>Today's Progress</strong>: CSS animations and JS Events for #5 Javascript 30<br />
    <strong>Thoughts:</strong> Smooth CSS Transform Animations!<br />
    <a target="_blank" href="https://maxletourneur.github.io/JavaScript30/05%20-%20Flex%20Panel%20Gallery/">Link to work</a><br />
    </p>
    <h3>Day 7 - October 29, Monday, 2018</h3>
    <p>
    <strong>Today's Progress</strong>: Typeahead with regexp for #6 of Javascript 30<br />
    <strong>Thoughts:</strong> String.replace() with Global, case insensitive regexp came in handy!<br />
    <a target="_blank" href="https://maxletourneur.github.io/JavaScript30/06%20-%20Type%20Ahead/">Link to work</a><br />
    </p>
    <h3>Day 8 - October 30, Tuesday, 2018</h3>
    <p>
    <strong>Today's Progress</strong>: Array functions cardio 2 for #7 of Javascript 30<br />
    <strong>Thoughts:</strong> myArray.some(test) is better than myArray.filter(test).length > 1<br />
    <a target="_blank" href="https://maxletourneur.github.io/JavaScript30/07%20-%20Array%20Cardio%20Day%202/">Link to work</a><br />
    </p>
    <h3>Day 9 - October 31, Wednesday, 2018</h3>
    <p>
    <strong>Today's Progress</strong>: HTML Canvas drawing for #8 of Javascript 30<br />
    <strong>Thoughts:</strong> First use of HTML Canvas! Exactly why I'm doing this challenge!<br />
    <a target="_blank" href="https://maxletourneur.github.io/JavaScript30/08%20-%20Fun%20with%20HTML5%20Canvas/">Link to work</a><br />
    </p>
    <h3>Day 10 - November 1, Thursday, 2018</h3>
    <p>
    <strong>Today's Progress</strong>: Dev tools for #9 of Javascript 30<br />
    <strong>Thoughts:</strong> I will use console.table(arr) for all the things now<br />
    <a target="_blank" href="https://maxletourneur.github.io/JavaScript30/09%20-%20Dev%20Tools%20Domination/">Link to work</a><br />
    </p>
    <h3>Day 11 - November 2, Friday, 2018</h3>
    <p>
    <strong>Today's Progress</strong>: Hold shift and select checkboxes for #10 of Javascript 30<br />
    <strong>Thoughts:</strong> Desktop behavior on the web!<br />
    <a target="_blank" href="https://maxletourneur.github.io/JavaScript30/10%20-%20Hold%20Shift%20and%20Check%20Checkboxes/">Link to work</a><br />
    </p>
    <h3>Day 12 - November 3, Saturday, 2018</h3>
    <p>
    <strong>Today's Progress</strong>: A custom video player for #11 of Javascript 30<br />
    <strong>Thoughts:</strong> Great exploration of this "not so old" HTML Element loaded with APIs... and history <br />
    <a target="_blank" href="https://maxletourneur.github.io/JavaScript30/11%20-%20Custom%20Video%20Player/">Link to work</a><br />
    </p>
    <h3>Day 13 - November 4, Sunday, 2018</h3>
    <p>
    <strong>Today's Progress</strong>: Display unicorm with a sequence of keys for #12 of Javascript 30<br />
    <a target="_blank" href="https://maxletourneur.github.io/JavaScript30/12%20-%20Key%20Sequence%20Detection/">Link to work</a><br />
    </p>
    <h3>Day 14 - November 5, Monday, 2018</h3>
    <p>
    <strong>Today's Progress</strong>: Slide in images on scroll for #13 of Javascript 30<br />
    <strong>Thoughts:</strong> Detect if an element is in the viewport is so much easier than before with Intersection Observers <br />
    <a target="_blank" href="https://maxletourneur.github.io/JavaScript30/13%20-%20Slide%20in%20on%20Scroll/">Link to work</a><br />
    </p>
    <h3>Day 15 - November 6, Tuesday, 2018</h3>
    <p>
    <strong>Today's Progress</strong>: Ref vs Copy basics and LocalStorage + Event Delegation for #14 and #15 of Javascript 30<br />
    <strong>Thoughts:</strong> Hook manuel event to rerender the DOM on a small app to remind you why you use React <br />
    <a target="_blank" href="https://maxletourneur.github.io/JavaScript30/15%20-%20LocalStorage/">Link to work</a><br />
    </p>
    <h3>Day 16 - November 7, Wednesday, 2018</h3>
    <p>
    <strong>Today's Progress</strong>: Shadows and accelerometer effects for #16 of Javascript 30<br />
    <strong>Thoughts:</strong> Discovered https://whatwebcando.today/ to see which Web APIs your device supports <br />
    <a target="_blank" href="https://maxletourneur.github.io/JavaScript30/16%20-%20Mouse%20Move%20Shadow/">Link to work</a><br />
    </p>
    <h3>Day 17 - November 8, Thursday, 2018</h3>
    <p>
    <strong>Today's Progress</strong>: Some RegExp before bed for #17 of Javascript 30<br />
    <strong>Thoughts:</strong> String processing is easier with RegExp... once you found the one you need <br />
    <a target="_blank" href="https://maxletourneur.github.io/JavaScript30/17%20-%20Sort%20Without%20Articles/">Link to work</a><br />
    </p>
    <h3>Day 18 - November 10, Saturday, 2018</h3>
    <p>
    <strong>Today's Progress</strong>: Playing with Reduce function for #18 of Javascript 30<br />
    <a target="_blank" href="https://maxletourneur.github.io/JavaScript30/18%20-%20Adding%20Up%20Times%20with%20Reduce/">Link to work</a><br />
    </p>
    <h3>Day 19 - November 11, Saturday, 2018</h3>
    <p>
    <strong>Today's Progress</strong>: Camera video processing in JS for #19 of Javascript 30<br />
    <strong>Thoughts:</strong> Real time video stream processing in the browser makes you fly... <br />
    <a target="_blank" href="https://maxletourneur.github.io/JavaScript30/19%20-%20Webcam%20Fun">Link to work</a><br />
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

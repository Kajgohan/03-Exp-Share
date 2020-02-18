- Working link to the experiment hosted on gh-pages.
- Concise description and screenshot of your experiment.
- Description of the technical achievements you attempted with this project.
- Description of the design achievements you attempted with this project.
[project link](https://kajgohan.github.io/03-Exp-Share/index.html)

# Project Description
## Experimental Design

Our experiment was designed to determine human's ability to distinguish outliers as a result of the popout effect. The experiment focused on the preattentive stage of vision by limiting the amount of time a participant was exposed to the visual stimulus. Our experiment also isolated popout to just To test our hypothesis that a greater difference in hue would result in more users noticing the popout, we developed an experiment. 

http://jov.arvojournals.org/article.aspx?articleid=2120544

---
First, we put together a simple instructional page to inform users of their task: 
![](Documentation/instructions.png)

The goal of this description was to inform the user that they would have a limited time to spot something that was out of place. Because the tests were so short, the users had to be adequately prepared, as the first round starts immediately after the begin button is pressed. 

---
Next, the visualization is flashed to the user:
![](Documentation/Outlier.png)

This page was shown to the quiz participant for 200ms (circle and arrow added to show popout dot). 200ms was chosen because it is the minimum time required to initiate eye movements. This is described in the paper <a href='https://www.cs.ubc.ca/cgi-bin/tr/1993/TR-93-51.pdf'>High-Speed Visual Estimation Using Preattentive Processing</a> by Healy, Booth and Enns. In the same study, outliers are varied in location on screen to prevent subjects from pre-focusing on any one location. Our experiment also varied the location because the same user could participate in an unlimited number of rounds. The number of dots was held constant for each round and trial. The background and popout color were varied in order to test the difference in hue, not simply the difference between one hue and another. The Outlier was added to the scatter plot 50% of the time, this meant that participants guessing randomly would have no advantage from always choosing true or false. This also meant that half of all rounds did not produce meaningful data. The Hue of the background dots and the outlier dot was recorded for each round. Additionally, the location of the outlier dot was recorded. 

---
After the scatter was shown for 2 seconds, the user was directed to the input page. 

![](Documentation/responsePage.png)

On this simple page the participant was asked if they saw a outlier on the previous page. This is a simple yes or no. The user is able to select each radio button using the mouse or with keyboard input. The p and q keys were chosen because the average computer user will use different hands for each key, therefore reducing the possibility of accidental inputs. After making their selection the participants were shown another page of dots with or without an outlier. This process continued until the user chose the end option. Each session was logged with a unique id. 

### Program Design

Our 

**HTML/CSS**



**D3**

**Firebase**

## Results

710 individual responses from X unique users

## Analysis and Conclusion

# Technical Achievements

- Firebase
  - user keys generation
- Keypress data Entry

# Design Achievements 
- color choice

# future work
 - ml false positive/negative stuff, precision / tptn fpfn f1
# limitations and potential areas for improvement

- Screen size and resoloution
  - other studies blocked mobile devices
- dot overlap
- lax security
- instructions the use of scatter plot and outlier caused some quiz participants to be confused

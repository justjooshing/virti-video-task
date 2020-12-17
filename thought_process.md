## Thought process while building this project

There are three main areas to address

1. Render the video
2. Overlay the images
3. Write a function that tells the images to appear at the right time, and disappear after a certain amount of time
4. Extra tasks

### Rendering the video

This part wasn't too hard. I wanted to make it look nice, so after I rendered the video, I styled the App component a little so it was sitting in the middle of the screen. I did have to look up how to import the video though, as apparently cra restricts you from importing from outside of the /src folder. I figured putting them in public was deliberate, so rather than ejecting it and modifying webpack. The React documentation says to use `src={process.env.PUBLIC_URL + *relative path in public*`.
(Later I thought I ran into a similar issue importing the images, and yet this solution wasn't working, but I eventually noticed I was trying to import image.jpg instead of image.png. Programming makes me laugh)

Once I had the video rendered I wanted to log when it was at 5 seconds, I hadn't used `refs` before, nor had I used functional components with hooks (previously I'd used class based components and stateless functional components). So while wanting to keep the App.jsx setup the same I decided to try functional components and hooks.

Eventually I managed to understand how to grab the time of the video; before that I kept getting "null" whenever I tried to log it. I think it was because I was trying to save my `x = ref.current` to a variable and log `x.currentTime`, as when I just passed `ref.current.currentTime` it worked fine. Now I was logging it I needed to get some sort of event listener to listen to whether it had triggered.

First I decided to pull in and place the images.

### Overlay the images

Once I managed to pull in the images, I realised that I needed a wrapper around the video and images so I could place them via absolute positioning. This was quite easy to do, but it doesn't seem possible to get them to appear in fullscreen mode. I couldn't figure this part out.

Now I had the video running, the time logging, and the images in place, but not connected together.

### Extra tasks #1

Changing the background colour was easy enough, but then I realised I didn't know how to affect a parent with child:hover. Googling this suggested that it's not easily possible, and that the best thing to do is use a sibling as a background.
So I added the background div and the css to change the background on hover. I also put a fallback color in case the image couldn't load for some reason. So it'll still change from white to black, but without the Virti logo.

### Connecting images with video timing

Now being able to grab the time of the video, I wanted to be able to trigger a function with it. The function should check the current video time,
~~and once the time has passed the image should show up and stay for the respective number of seconds~~ and stay until the point in the video where it should disappear.

Since we want to show each image a different number of times, we also need a counter to measure how often it's been displayed, and increase this once it's being displayed. To avoid them being displayed multiple times at once, we need to check that the function only fires when it's not currently active.

I first tested it with a button to run the `checkCount` function, which I pressed at different times. Once I knew the function was working, I tried to get it to check periodically based on `setInterval` at 10ms. I wasn't convinced that running checkCount every 10s was the right approach. I wanted to find something more precise once I'd checked that everything was behaving correctly.

When running the video on loop the state counts for each image didn't seem to be updating. I knew it was a problem with setInterval, because testing it again through a button click had it working perfectly. The wonderful world of the internet reminded me that I needed a `clearInterval`. I would like to understand more behind this, what happens to the state without `clearInterval`. I think it's because you're running multiple versions of the same function, so the one you're checking isn't updated, but I'm not exactly clear on why.

Now the video plays, the background changes, and the images appear and disappear at the right times when they're playing through or pausing.
I tried to make the checkCount function run more frequently by using `timeupdate` but it seemed to be checking less frequently than my `setInterval`, so I changed it back. I'm still not sure whether `setInterval` is the right solution, but I haven't found a better one yet.

Checked Aria tags on the images, and wondered whether I should be adding one for .ariaDescription on the video, which I found while inspecting the video object. Also checked that vh and vw were fine to use on most browsers with caniuse.com.

Asked Issy for clarification for whether the images should disappear at a certain point in the video or after a certain amount of seconds after appearing (including when paused). Adjusted the functions to only hide the images once we've passed certain points on the video. Then adjusted the function so it triggers the images appearing any time between their respective timeslots if you navigate forwards or backwards.

Main tasks pretty much complete.
The images appear and disappear at the right time, and reappear if you navigate back to inside their timeslot (if they're still within their count limit). Same as if you navigate ahead of their opening timeslot, they'll appear (if they're still within their count limit).

## Adjustments and expanded tasks

Adjust the video and images to make them responsive. They work fine on smaller devices now.
Separate out the css files to make removing them easier at a later stage if you wanted to. Now sitting with their respective .jsx files

While the standard controls look quite clean, I liked the idea of building custom controls. The standard one has pip and download (which we can disable) but also mute which is greyed out because the video has no sound.

Setting the play and fullscreen buttons weren't too hard. I created a function which looked at whether the video was currently playing (since I have autoplay on I have the currentlyPlaying state set to true initially), and then run `ref.current.play()` or `.pause()` respectively.

Updating the progress bar was quite a bit trickier. I had to trawl the internet for how to grab the mouse location in reference to the container, but got there eventually. I learnt that `getBoundingClientRect()` give you the dimensions of the container based on the viewport, which I could then use to calculate how far my mouse was along based on the length of the progress bar. For some reason it's off by -0.5 though. I adjusted that in the function but I'd like to know why it's happening.

Styling the progress bar was also difficult, I had to google this too because it wasn't changing as normal. Turns out there is `progress-bar` and `progress-value` that you need to change separately (rather than `color` and `background-color` which is what I expected), and that you need to use a `::-webkit` prefix to do so.

But now the unecessary controls have been removed, and the remaining ones changed. The video did seem a bit laggy when navigating via the progress bar, but it looks to be the same with the standard controls, so it might be my computer or a CRA/video size issue.

Overall it was a fun project where I learnt a ton, if I had more time I would want to have a hover over the progress bar to show the timestamp for easier navigation, which is something that I think is noticeably missing from my controls.
I also would put a "do not press" button in that runs away from you, but when you click it it takes you [here](https://www.youtube.com/watch?v=DLzxrzFCyOs). But it's more of a nice to have, and I want to submit by tonight.

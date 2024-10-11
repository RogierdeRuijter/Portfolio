# 1 very important detail about caniuse.com

TLDR: 44% of the user global support statistics are not reliable.

There’s a crucial detail that’s often overlooked when discussing user support
statistics for a specific feature on [caniuse.com](https://caniuse.com).

Can I Use can’t display user usage per Chrome version for Android devices.
That’s why it shows all Chrome for Android usage up to the latest version of
Android. You can see this in the image below.

<figure style="margin-inline-start: 0">
    <img src="blog/caniuse-android.png" 
        alt="Can I Use Chrome for Android" 
        width="350" 
        style="aspect-ratio: 772/626; max-width: 100%"
    />
  <figcaption>All Chrome for Android usage is displayed as if it was the latest version</figcaption>
</figure>

This statistic is not accurate. Many older Android devices don’t support the
latest version of Chrome. Therefore, we can’t trust 44% of the user support
statistics.

Let’s consider an example. When we search for container queries on caniuse.com,
we notice that it claims global support of approximately 91% of users. However,
it’s important to note that a significant portion of this 91%, around 44%, is
uncertain. Almost half of the devices that support container queries may not
actually support them 🤯

Knowing this it is important to always provide fallbacks for ‘relatively new’
browser features. The web was built for progressive enhancements. Ship them and
deliver better websites.

For more reading about this issue, look here: Why Can I Use can’t give version
numbers for Android

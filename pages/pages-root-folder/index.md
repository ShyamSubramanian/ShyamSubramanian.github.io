---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage
header:
  title: Shyam Subramanian
  image_fullwidth: header_unsplash_1.jpg
  caption: Data, Code, Music & Coffee ♥

para:
  title: About me
  text: "I am a Senior Data Scientist at Fidelity Investments. I have a Master's degree in Data Science from Worcester Polytechnic Institute and a Bachelor's degree in Computer Science from Anna University. I am passionate about data, programming, and research. Apart from academics, I love music. I play piano & I love to sing."
  url: "/about/"

widget1:
  title: "Research & Projects"
  url: '/research-projects/'
  image: "unsplash-research.jpg"
  text: 'Research and Projects have been the best tool to keep myself motivated and up to date with the state-of-the-art. It also helps me network with other researchers. My research interests are in Natural Language Processing.'
  
widget2:
  title: "Blog"
  url: '/blog/'
  image: widget-1-302x182.jpg
  text: 'I strongly believe that knowledge is most useful when it is shared. It also helps me understand and articulate better. I will also share some of the experiences that I find shareworthy! Follow along :)'

widget3:
  title: "Creative Space"
  url: '/creative-space/'
  image: creativity-3.jpg
  text: '"You can’t wait for inspiration, you have to go after it with a club" - <em>Jack Landon</em>. This space is to inspire myself to create. You can find things that I find creative and inspiring. Surprises await!!'
#
# Use the call for action to show a button on the frontpage
#
# To make internal links, just use a permalink like this
# url: /getting-started/
#
# To style the button in different colors, use no value
# to use the main color or success, alert or secondary.
# To change colors see sass/_01_settings_colors.scss
#
# callforaction:
#   url: https://tinyletter.com/feeling-responsive
#   text: Contact me ›
#   style: primary

permalink: /index.html
#
# This is a nasty hack to make the navigation highlight
# this page as active in the topbar navigation
#
homepage: true
---

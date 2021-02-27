---
title: Say — Text-to-Speech Command in OSX
emoji: 💬
tags:
  - macOS
  - Productivity
created: 2015-09-25
modified: 2015-09-25
---


The text-to-speech function in Mac OSX works in command line too.

A simple say command with a string provided:

```
$ say "Thank you for calling us. We are currently unavailable to take your call. Please leave us a message and we'll return your call as soon as possible."
```

We can control the speaking rate in words per minute:

```
$ say "Thank you for calling us. We are currently unavailable to take your call. Please leave us a message and we'll return your call as soon as possible." -r 180
```

We can export the speech audio into file:

```
$ say "Thank you for calling us. We are currently unavailable to take your call. Please leave us a message and we'll return your call as soon as possible." -r 180 -o ~/Desktop/voice-message-en.aiff
```

We can provide an input file instead of using the string parameter:

```
$ say -f voice-message.txt
```

We can specific which voice to use. And specifying “?” lists all the voice options:

```
$ say -v '?'
```

For instance, I can have a Cantonese text-to-speech with the voice “Sin-Ji”:

```
$ say -f voice-message.txt -v "Sin-ji" -r 70
```
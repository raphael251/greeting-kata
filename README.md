# greeting-kata - from raphael251

This Kata was extracted from [here](https://github.com/testdouble/contributing-tests/wiki/Greeting-Kata) and I just paste it below to make it easy to understand when someone wants to clone this repo and see what I did.

I found this Kata in a [this](https://medium.com/@marlenac/learning-tdd-with-katas-3f499cb9c492) Medium article, where are some others Katas for practicing if you are interested.

The purpose of this repo is just to practice some of TDD and "progressive development". I know there are still improvements to be made and test cases that are not yet covered. Maybe I i'll come back to fill them.

# Running the test cases

To run the test cases you just have to:

1. Clone this repo
2. run the `yarn` command
3. run the `yarn test` command

# The Greeting Kata

This [Kata](<https://en.wikipedia.org/wiki/Kata_(programming)>) is designed to help practice how a test of a pure function ought to look. It is intentionally designed to start with a very easy, non-branching base case which slowly becomes addled with complexity as additional requirements are added that will require significant branching and eventually a pressure to compose additional units.

This Kata was suggested by [Nick Gauthier](http://ngauthier.com) and inspired a bit by Bob from [Exercism](http://exercism.io).

This Kata is designed to be used with [[Detroit-school TDD]].

## Requirement 1

Write a method `greet(name)` that interpolates `name` in a simple greeting. For example, when `name` is `"Bob"`, the method should return a string `"Hello, Bob."`.

## Requirement 2

Handle nulls by introducing a stand-in. For example, when `name` is null, then the method should return the string `"Hello, my friend."`

## Requirement 3

Handle shouting. When `name` is all uppercase, then the method should shout back to the user. For example, when `name` is `"JERRY"` then the method should return the string `"HELLO JERRY!"`

## Requirement 4

Handle two names of input. When `name` is an array of two names (or, in languages that support it, varargs or a splat), then both names should be printed. For example, when `name` is `["Jill", "Jane"]`, then the method should return the string `"Hello, Jill and Jane."`

## Requirement 5

Handle an arbitrary number of names as input. When `name` represents more than two names, separate them with commas and close with an Oxford comma and "and". For example, when `name` is `["Amy", "Brian", "Charlotte"]`, then the method should return the string `"Hello, Amy, Brian, and Charlotte."`

## Requirement 6

Allow mixing of normal and shouted names by separating the response into two greetings. For example, when `name` is `["Amy", "BRIAN", "Charlotte"]`, then the method should return the string `"Hello, Amy and Charlotte. AND HELLO BRIAN!"`

## Requirement 7

If any entries in `name` are a string containing a comma, split it as its own input. For example, when `name` is `["Bob", "Charlie, Dianne"]`, then the method should return the string `"Hello, Bob, Charlie, and Dianne."`.

## Requirement 8

Allow the input to escape intentional commas introduced by Requirement 7. These can be escaped in the same manner that CSV is, with double quotes surrounding the entry. For example, when `name` is `["Bob", "\"Charlie, Dianne\""]`, then the method should return the string `"Hello, Bob and Charlie, Dianne."`.

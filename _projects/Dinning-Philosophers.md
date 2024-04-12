---
layout: page
category: Repositories
title: Dinning Philosophers
description: Implenting Dinning Philosophers problem in a client-server style with nice GUI using java and javafx
date: 2022-02-26 20:07:39 
last_modified_at: 2023-11-03 22:13:09 
url: https://github.com/ammahmoudi/Dinning-Philosophers
importance: 1
img: https://raw.githubusercontent.com/ammahmoudi/Dinning-Philosophers/master/images/cover.jpg
og_image: https://raw.githubusercontent.com/ammahmoudi/Dinning-Philosophers/master/images/cover.jpg
tags: [dining-philosophers-problem, dinning-philosophers, java, javafx]
categories: ["Repository", Java]
---
<div id="open-in-github" > <table class="table-cv list-group-table"> <tbody> <tr>    <td class="list-group-name"><b>   <a href="https://github.com/ammahmoudi/Dinning-Philosophers" rel="external nofollow noopener" target="_blank"><i class="fa-brands fa-github"></i> This page is auto-generated. For more info and materials take a look at the original repository.</a> </b></td></tr> </tbody> </table></div>
---
Implementing Dinning Philosophers problem in a client-server style with a nice GUI using java and JavaFX

{% include figure.liquid path="https://raw.githubusercontent.com/ammahmoudi/Dinning-Philosophers/master/images/cover.jpg" alt="cover" class="img-fluid rounded z-depth-1" zoomable=true %}

{% include figure.liquid path="https://raw.githubusercontent.com/ammahmoudi/Dinning-Philosophers/master/images/main.png" alt="main" class="img-fluid rounded z-depth-1" zoomable=true %}

## Dining Philosophers Problem
The problem of dining philosophers is a classic problem in computer science that illustrates the challenges of concurrency and synchronization. The problem can be described as follows:

- **Five philosophers** sit around a circular table, each with a bowl of rice and a chopstick on each side.
- The chopstick on the right of each philosopher is the same as the chopstick on the left of the next philosopher.
- The philosophers alternate between **thinking**, **eating**, and **waiting**. To eat, a philosopher must pick up both chopsticks on his sides.
- The only communication between the philosophers is through picking up and dropping the chopsticks (assuming they do not talk or write).
- The problem is to design an algorithm that allows the philosophers to eat without causing any **deadlock**, **starvation**, or **unfairness**.

Some possible scenarios that may occur are:

- If all the philosophers decide to eat at the same time, they will all succeed in the first step of the algorithm and pick up the right chopsticks. However, in the second step, they will all wait indefinitely for their left chopsticks. This situation is called a deadlock.
- If one of the philosophers who has picked up his right chopstick and is waiting for his left chopstick decides to drop his chopstick and sit quietly and watch the others eat, this may create a possibility that the altruistic philosopher never gets a chance to eat. This situation is called starvation.
- Even if all the philosophers manage to eat, some of them may get more opportunities to eat than others. This situation is called unfairness.

The task is to propose solutions for the problems mentioned in the algorithm and modify the algorithm accordingly.

{% include figure.liquid path="https://raw.githubusercontent.com/ammahmoudi/Dinning-Philosophers/master/images/waiting.png" alt="waiting" class="img-fluid rounded z-depth-1" zoomable=true %}

## Solution

- **Designate a special philosopher**: To avoid deadlock, the server can choose one of the philosophers as a special one (for example, the left-handed one). This philosopher must first pick up the left chopstick and then request the right one. This way, when everyone else requests the right chopstick at the same time, this philosopher prevents the deadlock by requesting the left one.
- **Queue the requests for each chopstick**: To avoid starvation, the server can queue the requests for each chopstick and after one philosopher finishes using a chopstick, if the next philosopher in the queue has requested it, he will not have the right to use it again until the other philosopher releases it. (Like when we are in a bakery, we only have the right to get bread once and to get bread again we have to go to the end of the queue.)
- **Prioritize the philosophers**: To avoid unfairness, the server can prioritize the philosophers. For example, the server can store the total time that each philosopher has eaten and when there is a competition, permit to eat to the philosopher to eat less.
- **Limit the holding time of each chopstick**: To avoid abuse and injustice, each philosopher has only 10 seconds to hold a chopstick. The philosopher must request to eat and start eating before 10 seconds, otherwise, the chopsticks will be taken back.

The solution in this repository uses a client-server architecture, where each philosopher is a client and the table is a server. The server manages the chopsticks and the state of the philosophers. The clients send requests to the server to pick up or drop the chopsticks. The server responds with a message indicating whether the request is granted or denied.

The solution also uses a GUI to visualize the problem and the solution. The GUI shows the table, the philosophers, the chopsticks, and the state of each philosopher. The GUI also allows the user to start, pause, resume, and stop the simulation.

{% include figure.liquid path="https://raw.githubusercontent.com/ammahmoudi/Dinning-Philosophers/master/images/extra.png" alt="extra" class="img-fluid rounded z-depth-1" zoomable=true %}


## Code Structure

The code is organized into two packages: Client and Server. The Client package contains the classes for the philosopher, the client, and the GUI. The Server package contains the classes for the table, the server, and the chopstick.

The main class for running the simulation is the Client class, which creates five instances of the Philosopher class and connects them to the Server class. The Server class creates an instance of the Table class and five instances of the Chopstick class. The Table class manages the chopsticks and the fairness queue. The Chopstick class represents a chopstick with a number and a state.

The GUI class creates a graphical user interface using JavaFX. The GUI class uses the Observer pattern to update the display according to the state of the philosophers and the chopsticks. The GUI class also provides buttons for controlling the simulation.

{% include figure.liquid path="https://raw.githubusercontent.com/ammahmoudi/Dinning-Philosophers/master/images/console.png" alt="console" class="img-fluid rounded z-depth-1" zoomable=true %}

## How to Run
you have to first run the server and then start some instances of the client. Then a client needs to start the dining.
To run the simulation, you need to have Java and JavaFX installed on your system.

To compile the code, you can use the following command:

`javac -cp .;path-to-javafx-sdk\lib\* Client\*.java Server\*.java`

To run the code, you can use the following command:

`java -cp .;path-to-javafx-sdk\lib\* Client.Client`

You should see a window with the GUI of the simulation. You can use the buttons to start, pause, resume, and stop the simulation. You can also see the state of each philosopher and chopstick on the screen.

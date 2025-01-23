# Node.js Memory Leak: Persistent Connection without Data Transfer

This repository demonstrates a subtle memory leak in a Node.js HTTP server. The server establishes persistent connections but fails to send data, leading to resource exhaustion over time.  This example highlights the importance of proper connection management in Node.js applications.

## Bug Description

The `bug.js` file contains a Node.js HTTP server that keeps connections open indefinitely without sending any data. This causes a memory leak because the server maintains open sockets consuming resources without a corresponding close event.

## Bug Solution

The `bugSolution.js` file provides a corrected version of the server. It properly manages the response by sending data or closing the connection if no data is needed. 

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`.
3. After a significant amount of time, observe memory usage using system monitoring tools (e.g., top, htop, Activity Monitor).
4. Then, run `node bugSolution.js` and repeat the memory usage observation. This version should not exhibit the same memory leak.
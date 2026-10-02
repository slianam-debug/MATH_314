var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "HW1",
  "level": "1",
  "url": "HW1.html",
  "type": "Section",
  "number": "",
  "title": "Homework 1",
  "body": " Homework 1  Due Friday, September 4     [From the book]: 1.10, 1.12, 1.15, 1.16*, 1.24, 1.28.    For problem 1.16: This is a proof problem. It needs to be written in Overleaf and printed separately (unless you write the entire homework in Overleaf). Instructions are below. I will not grade this problem now. I will give you feedback, and then you need to resubmit it for the next hw.      [Problem A]: First, watch the video at What is the Pigeonhole Principle? . Then, write a solution to the following problem, indicating clearly which objects are the pigeons and which objects are the holes:  A square of side length contains points. Prove that there are two of the points whose distance from each other is at most . ​ .     [Problem B]: Let be a finite set of integers and let be the graph on vertex set where for any , if and only if is odd.  Prove that is a bipartite graph for any such : indentify the partite sets and explain why they satisfy the definition.  If , find the value of (the number of edges of ). Justify your answer.        [Problem C]: Draw the graphs and .      Instructions for Overleaf  You need to create a (free) account on Overleaf .  You will need to write the solution for problem 1.16 above in Overleaf, print the resulting pdf file and turn it in with the rest of your homework. The code I am giving you below illustrates the main ideas of how to write math in Overleaf, using LaTeX. I trust that you can find plenty of resources on the internet to figure out anything else you may need.  To create your file: click on Create new project (give it a name) then Blank project . The blank project will contain a file called main.tex .You can change the name of the file to hw1.tex . Each time you make a change in the file, click on Recompile to see the .pdf output, that can be downloaded (see Download PDF on the top menu.) Delete the text in the file and paste the following text instead:  \\documentclass{amsart} \\usepackage[margin=1in]{geometry} \\usepackage{amsmath,amssymb} \\usepackage{graphicx} % Required for inserting images \\begin{document} \\begin{center} {\\bf MATH 314 HW\\# 1 Proof problem} \\end{center} \\bigskip \\noindent {\\bf Problem 1.16 (HW \\# 1)} Let $P=(u=v_0,v_1, \\dots, v_k=v)$, $k\\ge 1$, be a $u-v$ geodesic in a connected graph $G$. Prove: \\[ d(u,v_i)=i \\qquad \\text{for each integer $i$ with $1\\le i\\le k$} \\] \\bigskip \\begin{proof} Write your proof here. \\end{proof} \\end{document}   "
},
{
  "id": "hw1-ex-1",
  "level": "2",
  "url": "HW1.html#hw1-ex-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  [From the book]: 1.10, 1.12, 1.15, 1.16*, 1.24, 1.28.    For problem 1.16: This is a proof problem. It needs to be written in Overleaf and printed separately (unless you write the entire homework in Overleaf). Instructions are below. I will not grade this problem now. I will give you feedback, and then you need to resubmit it for the next hw.   "
},
{
  "id": "hw1-ex-2",
  "level": "2",
  "url": "HW1.html#hw1-ex-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  [Problem A]: First, watch the video at What is the Pigeonhole Principle? . Then, write a solution to the following problem, indicating clearly which objects are the pigeons and which objects are the holes:  A square of side length contains points. Prove that there are two of the points whose distance from each other is at most . ​ .  "
},
{
  "id": "hw1-ex-3",
  "level": "2",
  "url": "HW1.html#hw1-ex-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  [Problem B]: Let be a finite set of integers and let be the graph on vertex set where for any , if and only if is odd.  Prove that is a bipartite graph for any such : indentify the partite sets and explain why they satisfy the definition.  If , find the value of (the number of edges of ). Justify your answer.     "
},
{
  "id": "hw1-ex-4",
  "level": "2",
  "url": "HW1.html#hw1-ex-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  [Problem C]: Draw the graphs and .   "
},
{
  "id": "HW2",
  "level": "1",
  "url": "HW2.html",
  "type": "Section",
  "number": "",
  "title": "Homework 2",
  "body": " Homework 2  Due Friday, September 11   This homework has two parts:    The problems from the book need to be submitted on paper, in class;   Problems A and B need to be submitted online, in Canvas. You will need to upload three different files:    The .pdf file produced in Overleaf with the solution to Problem A and the picture for Problem B.    The .tex file you created in Overleaf with the Latex code that produced the .pdf file. (You can download this file by clicking on the 3 dots in the upper right corner under the file tree in Overleaf, then clicking on \"Download\").    A .pdf file recording your conversation with ChatGPT for Problem B. (Print to pdf from the browser)          Reading assignment: Read Section 1.4 (Multigraphs and digraphs)      [From the book]: 1.32(a), 2.1, 2.3, 2.5, 2.7    Note that odd problems have hints\/solutions at the back of the book. You can certainly look at those, but please write the solutions in your own words, add details where needed, and keep in mind that similar problems may show up on the next quiz\/exam, so make sure you can solve them independently.      [Problem A]: Prove that every graph with at least two vertices has a pair of vertices with the same degree. (The solution to this problem needs to be written in Overleaf.)    Use the Pigeonhole principle. Make sure to indicate clearly pigeons=?, holes=? and explain why there are more pigeons than holes     [Problem B]: Your task is to draw the graph below in Latex, using the TikZ package. The output should look as much as possible as the picture provided. You will need to have a conversation with ChatGPT to figure out how to do this and incorporate the picture in the same file created for problem A.  However, you are NOT allowed to show ChatGPT the picture: you will need to describe the graph in words. Additionally, I want you to record your conversation with ChatGPT (I want to see what you asked for; I would expect that you had to adjust your request a few times) and upload a record of this conversation as a .pdf file.   a graph       Overleaf code:  Create a new file in Overleaf and copy\/paste the code:  \\documentclass{amsart} \\usepackage[margin=1in]{geometry} \\usepackage{amsmath,amssymb,mathptmx} \\usepackage{graphicx} % Required for inserting images \\usepackage{tikz} % Package for drawing graphs \\usetikzlibrary{positioning} % Required for positioning nodes in TikZ \\begin{document} \\begin{center} {\\bf MATH 314 HW\\# 2 Problems A and B } \\end{center} \\bigskip \\noindent {\\bf Problem A} Prove that every graph with at least two vertices has a pair of vertices with the same degree. \\bigskip \\begin{proof} Write your proof here. \\end{proof} \\bigskip \\noindent {\\bf Problem B} Here is the graph that ChatGPT helped me draw: \\begin{center} Put the picture here. \\end{center} \\end{document}   "
},
{
  "id": "hw2-ex-1",
  "level": "2",
  "url": "HW2.html#hw2-ex-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Reading assignment: Read Section 1.4 (Multigraphs and digraphs)   "
},
{
  "id": "hw2-ex-2",
  "level": "2",
  "url": "HW2.html#hw2-ex-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  [From the book]: 1.32(a), 2.1, 2.3, 2.5, 2.7    Note that odd problems have hints\/solutions at the back of the book. You can certainly look at those, but please write the solutions in your own words, add details where needed, and keep in mind that similar problems may show up on the next quiz\/exam, so make sure you can solve them independently.   "
},
{
  "id": "hw2-ex-3",
  "level": "2",
  "url": "HW2.html#hw2-ex-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  [Problem A]: Prove that every graph with at least two vertices has a pair of vertices with the same degree. (The solution to this problem needs to be written in Overleaf.)    Use the Pigeonhole principle. Make sure to indicate clearly pigeons=?, holes=? and explain why there are more pigeons than holes   "
},
{
  "id": "hw2-ex-4",
  "level": "2",
  "url": "HW2.html#hw2-ex-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " [Problem B]: Your task is to draw the graph below in Latex, using the TikZ package. The output should look as much as possible as the picture provided. You will need to have a conversation with ChatGPT to figure out how to do this and incorporate the picture in the same file created for problem A.  However, you are NOT allowed to show ChatGPT the picture: you will need to describe the graph in words. Additionally, I want you to record your conversation with ChatGPT (I want to see what you asked for; I would expect that you had to adjust your request a few times) and upload a record of this conversation as a .pdf file.   a graph    "
},
{
  "id": "HW3",
  "level": "1",
  "url": "HW3.html",
  "type": "Section",
  "number": "",
  "title": "Homework 3",
  "body": " Homework 3  Due Friday, September 18     [From the book]: 2.32, 3.1, 3.3, 3.4, 3.7, 3.8, 3.9     [Problem A]: A group of 9 friends (call them A,B,C, ...) want to exchange gifts for Christmas, but they do not have quite enough money to buy presents for everybody. They make the following rules for the gift exchange:   If X gives a gift to Y, then Y also gives a gift to X.    Each person in the group is to receive exactly 6 gifts from 6 different friends (and will also give 6 gifts)      Draw a graph that illustrates one possible way the group can plan their gift giving, and make connections with what you learned in class. (Does the graph have a name?) Then, provide instructions for gift-giving: Tell each person in the group who to buy presents for.    If the friends decide to reduce the number of gifts, so that each person in the group will receive exactly 5 gifts from 5 different friends (and also give 5 gifts), do the same task as in the first part, if possible. If not possible, explain why.        [Problem B]: Prove that if is a graph with , then must contain a cycle.   This problem needs to be written in Overleaf and printed out     Proceed by contradiction, assuming there is no cycle. Choose a path of longest length in the graph. Use the no cycle assumption and the hypothesis that to construct a path of larger length, contradicting the assumption on .      If you turned in your Overleaf problem from Homework 1, and you were in class on Friday, you received feedback on your writing. Please revise the problem accordingly, but do not turn it in again just yet. If you did not turn in your Overleaf problem from Homework 1, you should turn it in now, so that I can give you feedback. While I am not grading anyone on these problems just yet, I will eventually assign a grade for these problems.      Overleaf code:  Create a new file in Overleaf and copy\/paste the code:  \\documentclass{amsart} \\usepackage[margin=1in]{geometry} \\usepackage{amsmath,amssymb} \\usepackage{graphicx} % Required for inserting images \\begin{document} \\begin{center} {\\bf MATH 314 HW\\# 3 Proof problem} \\end{center} \\bigskip \\noindent {\\bf Problem B} Prove that if $G$ is a graph with $\\delta(G)\\geq 2$, then $G$ must contain a cycle. \\bigskip \\begin{proof} Write your proof here. \\end{proof} \\end{document}   "
},
{
  "id": "hw3-ex-1",
  "level": "2",
  "url": "HW3.html#hw3-ex-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  [From the book]: 2.32, 3.1, 3.3, 3.4, 3.7, 3.8, 3.9   "
},
{
  "id": "hw3-ex-2",
  "level": "2",
  "url": "HW3.html#hw3-ex-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " [Problem A]: A group of 9 friends (call them A,B,C, ...) want to exchange gifts for Christmas, but they do not have quite enough money to buy presents for everybody. They make the following rules for the gift exchange:   If X gives a gift to Y, then Y also gives a gift to X.    Each person in the group is to receive exactly 6 gifts from 6 different friends (and will also give 6 gifts)      Draw a graph that illustrates one possible way the group can plan their gift giving, and make connections with what you learned in class. (Does the graph have a name?) Then, provide instructions for gift-giving: Tell each person in the group who to buy presents for.    If the friends decide to reduce the number of gifts, so that each person in the group will receive exactly 5 gifts from 5 different friends (and also give 5 gifts), do the same task as in the first part, if possible. If not possible, explain why.     "
},
{
  "id": "hw3-ex-3",
  "level": "2",
  "url": "HW3.html#hw3-ex-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  [Problem B]: Prove that if is a graph with , then must contain a cycle.   This problem needs to be written in Overleaf and printed out     Proceed by contradiction, assuming there is no cycle. Choose a path of longest length in the graph. Use the no cycle assumption and the hypothesis that to construct a path of larger length, contradicting the assumption on .   "
},
{
  "id": "hw3-ex-4",
  "level": "2",
  "url": "HW3.html#hw3-ex-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  If you turned in your Overleaf problem from Homework 1, and you were in class on Friday, you received feedback on your writing. Please revise the problem accordingly, but do not turn it in again just yet. If you did not turn in your Overleaf problem from Homework 1, you should turn it in now, so that I can give you feedback. While I am not grading anyone on these problems just yet, I will eventually assign a grade for these problems.   "
},
{
  "id": "HW4",
  "level": "1",
  "url": "HW4.html",
  "type": "Section",
  "number": "",
  "title": "Homework 4",
  "body": " Homework 4  Due Friday, September 25     [From the book]: 3.17, 3.22, 3.24, 3.25     [Problem A]: How many distinct equivalence classes (under the relation of isomorphism) for a graph with 4 vertices are there? Draw exactly one graph for each equivalence class. (Only draw non-isomorphic graphs.)    "
},
{
  "id": "hw4-ex-1",
  "level": "2",
  "url": "HW4.html#hw4-ex-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  [From the book]: 3.17, 3.22, 3.24, 3.25   "
},
{
  "id": "hw4-ex-2",
  "level": "2",
  "url": "HW4.html#hw4-ex-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " [Problem A]: How many distinct equivalence classes (under the relation of isomorphism) for a graph with 4 vertices are there? Draw exactly one graph for each equivalence class. (Only draw non-isomorphic graphs.)  "
},
{
  "id": "HW5",
  "level": "1",
  "url": "HW5.html",
  "type": "Section",
  "number": "",
  "title": "Homework 5",
  "body": " Homework 5  Due Friday, October 2nd     [From the book]: 4.2 (write in Overleaf!), 4.7, 4.9, 4.13, 4.14, 4.18     [Problem A]: Draw a graph with 3 edges that are bridges and 10 edges that are not bridges.     Overleaf code for problem 4.2:  Create a new file in Overleaf and copy\/paste the code:  \\documentclass{amsart} \\usepackage[margin=1in]{geometry} \\usepackage{amsmath,amssymb} \\usepackage{graphicx} % Required for inserting images \\begin{document} \\begin{center} {\\bf MATH 314 HW\\# 5 Proof problem} \\end{center} \\bigskip \\noindent {\\bf Problem 4.2} Prove that every connected graph all of whose vertices have even degrees contains no bridges. \\bigskip \\begin{proof} Write your proof here. \\end{proof} \\end{document}   "
},
{
  "id": "hw5-ex-1",
  "level": "2",
  "url": "HW5.html#hw5-ex-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  [From the book]: 4.2 (write in Overleaf!), 4.7, 4.9, 4.13, 4.14, 4.18   "
},
{
  "id": "hw5-ex-2",
  "level": "2",
  "url": "HW5.html#hw5-ex-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " [Problem A]: Draw a graph with 3 edges that are bridges and 10 edges that are not bridges.  "
},
{
  "id": "HW6",
  "level": "1",
  "url": "HW6.html",
  "type": "Section",
  "number": "",
  "title": "Homework 6",
  "body": " Homework 6  Due Monday, October 12th     [From the book]: 4.25, 4.27, 4.28, 4,34(a), 4.35(a), 5.3     [Problem A]: Use either of the two algorithms to find a spanning tree of minimum total weight and compute its total weight.   a graph     "
},
{
  "id": "hw6-ex-1",
  "level": "2",
  "url": "HW6.html#hw6-ex-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  [From the book]: 4.25, 4.27, 4.28, 4,34(a), 4.35(a), 5.3   "
},
{
  "id": "hw6-ex-2",
  "level": "2",
  "url": "HW6.html#hw6-ex-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " [Problem A]: Use either of the two algorithms to find a spanning tree of minimum total weight and compute its total weight.   a graph   "
},
{
  "id": "Review1",
  "level": "1",
  "url": "Review1.html",
  "type": "Section",
  "number": "",
  "title": "Review for Exam 1",
  "body": " Review for Exam 1  Topics covered by Exam 1     Section 1.1 - Graphs and graph models     Definitions and concepts:    graph    edge    vertex    trivial graph    order    size         Section 1.2 Connected graphs     Definitions and concepts    adjacent vertices    vertex (edge) incident to an edge (vertex)    subgraph    the graph , where is an edge    the graph , where is a vertex    walk    closed walk    trail\/circuit    path\/cycle     -cycle, even cycle, odd cycle    connected graph    length of a walk    distance between two vertices      geodesic    diameter of a graph    component of a graph    equivalence relation (see appendix)      Applications and theorems:    Theorem 1.6    Theorem 1.7 - Be able to prove          Section 1.3 Common classes of graphs     Definitions and concepts:    complete graph     path graph     cycle graph     bipartite graph\/partite sets    complete bipartite graph     union and product of graphs ( and )    The cube graph       Applications and theorems:    Theorem 1.12    Be able to explain why a given graph is bipartite or not bipartite         Section 2.1 Degree of a vertex     Definitions and concepts:    degree of a vertex    isolated vertex, end-vertex(leaf)    minimum degree , maximum degree       Applications and theorems    Theorem 21.    Corollary 2.3 - Be able to prove     Theorem 2.4    Corollary 2.5    Apply these results in exercises         Section 2.2 Regular graphs     Definition anf concepts:    regular graph    The Harary graph (be able to draw it for given and )      Applications and Theorems:    Theorem 2.6         Section 2.3 Degree sequences     Definition and concepts:    degree sequence of a graph    graphical sequence      Applications and theorems:    Theorem 2.10    Be able to decide if a sequence is graphical. If it is, draw a graph that realizes it.         Section 3.1 The definition of isomorphism     Definition and concepts:    isomorphism    isomorphic graphs      Applications and theorems    Know various properties of a graph that are preserved under isomorphism    Be able to recognize and explain that two given graphs are or are not isomorphic         Section 3.2 Isomoprhism as a relation     Definitions and concepts:    isomorphism class (see also Appendix 2.1 for equivalence class)      Applications and theorems:    Theorem 3.6    Identify isomorphism classes of graphs with various properties by giving a representative for each class (i.e. find all possible non-isomorphic graphs with the given property)         Section 3.3 Excursion: Graphs and groups     Definitions and concepts    automorphism    permutation, cycle      Applications and theorems:    Identify the automorphisms of a graph and write them using cycle notation         Section 4.1 Bridges     Definitions and concepts    bridge      Applications and theorems:    Theorem 4.1 Be able to prove          Section 4.2 Trees     Definitions and concepts    acyclic graph    tree    root of a tree    forest    parents and children in a rooted tree    binary tree, complete binary tree (as done in class)    mathematical induction (See also appendix 3)    height of a rooted tree (as done in class)      Applications and theorems    Theorem 4.2 Be able to prove     Theorem 4.3    Theorem 4.4 Be able to prove     Theorem 4.6    Corollary 4.6    Theorem 4.7    Theorem proved in class: the number of vertices of a complete tree of height is     Be able to solve exercises putting together these results         The minimum Spanning tree problem     Definitions and concepts    spanning tree    weighted graph    minimum spanning tree      Applications and theorems    The Kruskal algorithm    The Prim algorithm         Setcion 4.4 Excursion: the number of spanning trees     Applications and theorems:    Count the number of spanning trees in a given graph        "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})

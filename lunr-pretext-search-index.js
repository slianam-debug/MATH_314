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

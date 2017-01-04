import React                 from 'react';
import { ReactRouter, Link } from 'react-router';
import '../styles/main.css';

class First extends React.Component {
    render() {
        return (
            <div>
                <h1>First Things First</h1>
                <p>
                    Before we get to git itself, let's talk more about what exactly it is and dispell some of the misconceptions that surround it. Feel free to <Link to='/start'>skip this section</Link> and get started instead.
                </p>
                <h2>What is Git?</h2>
                <p>
                    Git is a <i><b>version control system</b></i>. As you might have guessed, a version control system keeps track of different versions of files. Git is most often associated with software development, but can be used for any type of file.
                </p>
                <h2>Misconceptions</h2>
                <ol>
                    <p>
                        <li><b>Git is confusing, abstract, and technical</b></li>
                        while git can certainly be less-than-intuitive at times, most of the confusion stems from just copy-pasting commands without any sense of the overarching flow.
                    </p>
                    <p>
                        <li><b>Git is only for teams</b> </li>
                        If you've ever written a paper, and ended up with a file list that looks like this, git is for you:
                        <br/>
                        <img alt="files" src={"../public/images/files.png"}/>
                        <br/>
                        With git, the same effect of having different "snapshots" of your paper can be accomplished with just one file!
                    </p>
                    <p>
                        <li><b>Git requires that I change my existing workflow</b></li>
                        Git fits neatly into most any workflow. Think of git as an added step to your normal process.
                    </p>
                    <p>
                        <li><b>Git is only for software developers</b> </li>
                        One of the overarching principles of linux is that everything is a file. All git does is keep track of changes to those files. Git doesn't care if it's an image, movie, source code, executable, etc. Anyone can benefit from version control!
                    </p>
                </ol>
                <h2>History </h2>
                <p>
                    Git was developed in 2005 by Linus Torvalds, the creator of Linux. He wrote it as a free alternative to their previous, non-free version control system.

                </p>
                <h2>Name</h2>
                <p>
                    git [<i>noun</i>] : an unpleasant or contemptible person.
                </p>
                <br/>
                <p>
                    Linus claims he named git after himself, poking fun at his occasional short-tempered tendencies. He also has offered the acronym "goddamn idiotic truckload of shit" as an alternative interpretation when it breaks.
                </p>
                <h2>Enough Talk</h2>
                <p>
                    Let's <Link to='/start'>get to gitting!</Link>
                </p>
            </div>
        )
    }
}

export default First;

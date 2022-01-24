
import "./topbar.css"

 function TopBar()
{
    return (
        <div className="top">
            <div className="topCenter">
                MY BLOG
            </div>
        </div>
    )
}

 function TopBar2()
{
    return (
        <div className="top2">
            <div className="topCenter2">
                <ul className="topList">
                    <li className="topListItem">
                         <a href="/">HOME</a>
                    </li>
                    <li className="topListItem">
                        <a href="/code">CODE</a>
                    </li>
                    <li className="topListItem">
                        <a href="/github">GITHUB</a>
                    </li>
                    <li className="topListItem">
                        <a href="/linkedin">LINKEDIN</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export {TopBar, TopBar2}


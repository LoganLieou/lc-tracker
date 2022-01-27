import { NB } from './index.js'
import { SiAuth0 } from 'react-icons/si'
import { MdOutlineGridOn } from 'react-icons/md'
import { CgDatabase } from 'react-icons/cg'

export function Cell(props) {
  return (
    <div className="feature col">
      <div className="feature-icon">
        {props.icon}
      </div>
      <h2>{props.title}</h2>
      <p>
        {props.body}
      </p>
      <a href={props.href} className="icon-link">
        {props.link}
      </a>
    </div>
  )
}

export default function About() {
  return (
    <div>
      <NB/>
      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">Roadmap / Future Improvements</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <Cell 
            icon={<SiAuth0 size={60}/>} 
            title="Authentication"
            body={
              `In the future I plan on adding login
              and authentication features using auth0
              which will allow me to keep track individual
              streaks and goals.`
            }
            href="https://auth0.com/"
            link="auth0 homepage"
          />
          <Cell 
            icon={<MdOutlineGridOn size={60}/>} 
            title="Heatmap"
            body={
              `Leetcode similar to github has the
              heatmap feature which allows users
              to see streaks and how many problems
              a day that they have completed so far.`
            }
            href="https://apexcharts.com/javascript-chart-demos/heatmap-charts/basic/"
            link="potential chart library"
          />
          <Cell 
            icon={<CgDatabase size={60}/>} 
            title="Database"
            body={
              `Database connection will be added in order to manage
              user data and track leetcode streaks and completed problems
              etc. db either aws or sqlite`
            }
            href="https://www.prisma.io/nextjs"
            link="prisma maybe?"
          />
        </div>
      </div>
    </div>
  )
}

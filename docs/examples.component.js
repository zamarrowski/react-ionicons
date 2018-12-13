import React, { Component } from 'react'
import styles from './examples.css'
import Paper from 'material-ui/Paper'
import IosRefresh from 'react-ionicons/IosRefresh'
import LogoNodejs from 'react-ionicons/LogoNodejs'
import MdInfinite from 'react-ionicons/MdInfinite'
import MdHeart from 'react-ionicons/MdHeart'
import MdPizza from 'react-ionicons/MdPizza'

class Examples extends Component {
  render() {
    const nodejsExample = `<LogoNodejs onClick={() => alert('Hi!')} fontSize="60px" color="#43853d" />`
    const loadExample = `<IosRefresh fontSize="60px" color="#347eff" rotate={true} />`
    const loadLoopExample = `<MdInfinite fontSize="60px" rotate={true} />`
    const heartExample = `<MdHeart fontSize="60px" color="red" beat={true} />`
    const bellExample = `<MdPizza shake={true} fontSize="60px" color="orange" />`
    return(
      <div className="examples">
        <h2>Examples</h2>
        <div className="examplesContainer">
          <Paper className="example" zDepth={2}>
            <LogoNodejs  onClick={() => alert('Hi!')} fontSize="60px" color="#43853d" />
            <pre>
              {nodejsExample}
            </pre>
          </Paper>
          <Paper className="example" zDepth={2}>
            <IosRefresh fontSize="60px" color="#347eff" rotate={true} />
            <pre>
              {loadExample}
            </pre>
          </Paper>
          <Paper className="example" zDepth={2}>
            <MdInfinite fontSize="60px" rotate={true} />
            <pre>
              {loadLoopExample}
            </pre>
          </Paper>
          <Paper className="example" zDepth={2}>
            <MdHeart fontSize="60px" color="red" beat={true} />
            <pre>
              {heartExample}
            </pre>
          </Paper>
          <Paper className="example" zDepth={2}>
            <MdPizza shake={true} fontSize="60px" color="orange" />
            <pre>
              {bellExample}
            </pre>
          </Paper>
        </div>
      </div>
    )
  }
}

export default Examples

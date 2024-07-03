import {Component} from "react";
import {connect} from "react-redux";
import {RootState} from "../../app/store";
import {setStart} from "./pageSlice";

export interface IProps {
  start: number
  pages: number
}

class PageSelect extends Component {
  handleClick = (n: number) => {
    const {setStart} = this.props as {setStart: (n: number) => void}
    setStart(n);
  };

  render() {
    const {start, pages} = this.props as IProps

    return (
      <>
        <div className="pages">
          {
            [...Array(pages)].map((_, idx) => (
              <div
                key={idx}
                className={start === idx? "cur": ""}
                onClick={() => this.handleClick(idx)}
              >
                {idx + 1}
              </div>
            ))
          }
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  start: state.page.start,
  pages: state.page.pages,
});

export default connect(mapStateToProps, {setStart})(PageSelect);

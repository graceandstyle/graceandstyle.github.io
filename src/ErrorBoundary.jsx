import React from "react";
import Icon from './images/ms-icon-150x150.png';

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
          <div className="loaderdiv">
            <div className="loadercontainer">
                <img src={Icon} alt="Grace-Style-Logo"></img>
                <div style={{whiteSpace:'nowrap',marginBottom:'10px'}}>Browser not supported.</div>
                {
                  (!isMobile) &&
                    <>
                      <div style={{whiteSpace:'nowrap',fontSize:'10pt',marginBottom:'10px'}}>Please use the following browser</div>
                      <div style={{whiteSpace:'nowrap',width:'auto',height:'auto'}}>
                        <div style={{position:'relative',width:'auto',height:'auto',display:'inline-block',verticalAlign:'top',marginRight:'10px'}}>
                          <div className='fab fa-chrome addtooltip' style={{fontSize:'35pt',cursor:'pointer'}}>
                            <div className="tooltip addshadow">
                                <div></div>
                                <span>Chrome</span>
                            </div>
                          </div>
                        </div>
                        <div style={{position:'relative',width:'auto',height:'auto',display:'inline-block',verticalAlign:'top',marginRight:'10px'}}>
                          <div className='fab fa-edge addtooltip' style={{fontSize:'35pt',cursor:'pointer'}}>
                            <div className="tooltip addshadow">
                                <div></div>
                                <span>Edge</span>
                            </div>
                          </div>
                        </div>
                        <div style={{position:'relative',width:'auto',height:'auto',display:'inline-block',verticalAlign:'top'}}>
                          <div className='fab fa-firefox-browser addtooltip' style={{fontSize:'35pt',cursor:'pointer'}}>
                            <div className="tooltip addshadow">
                                <div></div>
                                <span>Firefox</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                }
                {
                  (isMobile) &&
                    <>
                      <div style={{whiteSpace:'nowrap',fontSize:'10pt',marginBottom:'10px'}}>Please use a newer browser or newer mobile device.</div>
                    </>
                }
            </div>
        </div>
        );
      }
  
      return this.props.children; 
    }
  }
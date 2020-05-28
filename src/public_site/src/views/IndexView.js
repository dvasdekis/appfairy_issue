/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js").then(body => body.text()),
  Promise.resolve("var ctx=document.getElementById(\"myChart1\"),myChart=new Chart(ctx,{type:\"radar\",data:{labels:[\"ITP Points\",\"Activity\",\"Clutch\",\"Hard\",\"Clay\",\"Grass\",\"Consistency\",\"Momentum\"],datasets:[{label:\"\",data:[20+80*Math.random(),20+80*Math.random(),20+80*Math.random(),20+80*Math.random(),20+80*Math.random(),20+80*Math.random(),20+80*Math.random(),20+80*Math.random()]}]},options:{elements:{line:{tension:.4}},legend:{display:!1},tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!1,scale:{ticks:{beginAtZero:!0,callback:function(){return\"\"},backdropColor:\"rgba(0, 0, 0, 0)\"},pointLabels:{fontSize:14}}}});"),
  fetch("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js").then(body => body.text()),
  Promise.resolve("var ctx=document.getElementById(\"myChart1\"),myChart=new Chart(ctx,{type:\"radar\",data:{labels:[\"ITP Points\",\"Activity\",\"Clutch\",\"Hard\",\"Clay\",\"Grass\",\"Consistency\",\"Momentum\"],datasets:[{label:\"\",data:[20+80*Math.random(),20+80*Math.random(),20+80*Math.random(),20+80*Math.random(),20+80*Math.random(),20+80*Math.random(),20+80*Math.random(),20+80*Math.random()]}]},options:{elements:{line:{tension:.4}},legend:{display:!1},tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!1,scale:{ticks:{beginAtZero:!0,callback:function(){return\"\"},backdropColor:\"rgba(0, 0, 0, 0)\"},pointLabels:{fontSize:14}}}});"),
  Promise.resolve("var today=new Date,dd=today.getDate(),mm=today.getMonth()+1,yyyy=today.getFullYear();dd<10&&(dd=\"0\"+dd),mm<10&&(mm=\"0\"+mm),today=mm+\"/\"+dd+\"/\"+yyyy,document.write(today);"),
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5ecb12c48d949fbbf5cedbdc").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
  fetch("https://cdn.rawgit.com/iamceege/tooltipster/master/dist/js/tooltipster.bundle.min.js").then(body => body.text()),
  fetch("https://cdn.rawgit.com/maciejsaw/tooltipster-for-webflow/master/tooltipster-for-webflow.js").then(body => body.text()),
  Promise.resolve("function startTimer(t,e){var o,n,r=t;setInterval(function(){o=parseInt(r/60,10),n=parseInt(r%60,10),o=o<10?\"0\"+o:o,n=n<10?\"0\"+n:n,e.textContent=\"Bid Now! 00:\"+o+\":\"+n+\" Left\",--r<0&&(r=t)},1e3)}window.onload=function(){var t=2700,e=document.querySelector(\"#countdown1\"),o=document.querySelector(\"#countdown2\"),n=document.querySelector(\"#countdown3\"),r=document.querySelector(\"#countdown4\"),c=document.querySelector(\"#countdown5\"),u=document.querySelector(\"#countdown6\");startTimer(t,e),startTimer(t,o),startTimer(t,n),startTimer(t,r),startTimer(t,c),startTimer(t,u)};"),
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    scripts.concat(Promise.resolve()).reduce((loaded, loading) => {
      return loaded.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return loading
      })
    })
  }

  render() {
    const proxies = Controller !== IndexView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/playerbid.webflow.css);


            .tooltipster-sidetip.tooltipster-borderless .tooltipster-box {
          	border: none;
          	background: #f6f6f6;
          	background: #f6f6f6;
          }
          .tooltipster-sidetip.tooltipster-borderless.tooltipster-bottom .tooltipster-box {
          	margin-top: 8px;
          }
          .tooltipster-sidetip.tooltipster-borderless.tooltipster-left .tooltipster-box {
          	margin-right: 8px;
          }
          .tooltipster-sidetip.tooltipster-borderless.tooltipster-right .tooltipster-box {
          	margin-left: 8px;
          }
          .tooltipster-sidetip.tooltipster-borderless.tooltipster-top .tooltipster-box {
          	margin-bottom: 8px;
          }
          .tooltipster-sidetip.tooltipster-borderless .tooltipster-arrow {
          	height: 8px;
          	margin-left: -8px;
          	width: 16px;
          }
          .tooltipster-sidetip.tooltipster-borderless.tooltipster-left .tooltipster-arrow,
          .tooltipster-sidetip.tooltipster-borderless.tooltipster-right .tooltipster-arrow {
          	height: 16px;
          	margin-left: 0;
          	margin-top: -8px;
          	width: 8px;
          }
          .tooltipster-sidetip.tooltipster-borderless .tooltipster-arrow-background {
          	display: none;
          }
          .tooltipster-sidetip.tooltipster-borderless .tooltipster-arrow-border {
          	border: 8px solid transparent;
          }
          .tooltipster-sidetip.tooltipster-borderless.tooltipster-bottom .tooltipster-arrow-border {
          	border-bottom-color: #f6f6f6;
          	border-bottom-color: #f6f6f6;
          }
          .tooltipster-sidetip.tooltipster-borderless.tooltipster-left .tooltipster-arrow-border {
          	border-left-color: #f6f6f6;
          	border-left-color: #f6f6f6;
          }
          .tooltipster-sidetip.tooltipster-borderless.tooltipster-right .tooltipster-arrow-border {
          	border-right-color: #f6f6f6;
          	border-right-color: #f6f6f6;
          }
          .tooltipster-sidetip.tooltipster-borderless.tooltipster-top .tooltipster-arrow-border {
          	border-top-color: #f6f6f6;
          	border-top-color: #f6f6f6;
          }
          .tooltipster-sidetip.tooltipster-borderless.tooltipster-bottom .tooltipster-arrow-uncropped {
          	top: -8px;
          }
          .tooltipster-sidetip.tooltipster-borderless.tooltipster-right .tooltipster-arrow-uncropped {
          	left: -8px;
          }
          .tooltipster-fall,
          .tooltipster-grow.tooltipster-show {
              -webkit-transition-timing-function: cubic-bezier(.175, .885, .32, 1);
              -moz-transition-timing-function: cubic-bezier(.175, .885, .32, 1.15);
              -ms-transition-timing-function: cubic-bezier(.175, .885, .32, 1.15);
              -o-transition-timing-function: cubic-bezier(.175, .885, .32, 1.15)
          }
          .tooltipster-base {
              display: flex;
              pointer-events: none;
              position: absolute
          }
          .tooltipster-box {
              flex: 1 1 auto
          }
          .tooltipster-content {
              box-sizing: border-box;
              max-height: 100%;
              max-width: 100%;
              overflow: auto
          }
          .tooltipster-ruler {
              bottom: 0;
              left: 0;
              overflow: hidden;
              position: fixed;
              right: 0;
              top: 0;
              visibility: hidden
          }
          .tooltipster-fade {
              opacity: 0;
              -webkit-transition-property: opacity;
              -moz-transition-property: opacity;
              -o-transition-property: opacity;
              -ms-transition-property: opacity;
              transition-property: opacity
          }
          .tooltipster-fade.tooltipster-show {
              opacity: 1
          }
          .tooltipster-grow {
              -webkit-transform: scale(0, 0);
              -moz-transform: scale(0, 0);
              -o-transform: scale(0, 0);
              -ms-transform: scale(0, 0);
              transform: scale(0, 0);
              -webkit-transition-property: -webkit-transform;
              -moz-transition-property: -moz-transform;
              -o-transition-property: -o-transform;
              -ms-transition-property: -ms-transform;
              transition-property: transform;
              -webkit-backface-visibility: hidden
          }
          .tooltipster-grow.tooltipster-show {
              -webkit-transform: scale(1, 1);
              -moz-transform: scale(1, 1);
              -o-transform: scale(1, 1);
              -ms-transform: scale(1, 1);
              transform: scale(1, 1);
              -webkit-transition-timing-function: cubic-bezier(.175, .885, .32, 1.15);
              transition-timing-function: cubic-bezier(.175, .885, .32, 1.15)
          }
          .tooltipster-swing {
              opacity: 0;
              -webkit-transform: rotateZ(4deg);
              -moz-transform: rotateZ(4deg);
              -o-transform: rotateZ(4deg);
              -ms-transform: rotateZ(4deg);
              transform: rotateZ(4deg);
              -webkit-transition-property: -webkit-transform, opacity;
              -moz-transition-property: -moz-transform;
              -o-transition-property: -o-transform;
              -ms-transition-property: -ms-transform;
              transition-property: transform
          }
          .tooltipster-swing.tooltipster-show {
              opacity: 1;
              -webkit-transform: rotateZ(0);
              -moz-transform: rotateZ(0);
              -o-transform: rotateZ(0);
              -ms-transform: rotateZ(0);
              transform: rotateZ(0);
              -webkit-transition-timing-function: cubic-bezier(.23, .635, .495, 1);
              -webkit-transition-timing-function: cubic-bezier(.23, .635, .495, 2.4);
              -moz-transition-timing-function: cubic-bezier(.23, .635, .495, 2.4);
              -ms-transition-timing-function: cubic-bezier(.23, .635, .495, 2.4);
              -o-transition-timing-function: cubic-bezier(.23, .635, .495, 2.4);
              transition-timing-function: cubic-bezier(.23, .635, .495, 2.4)
          }
          .tooltipster-fall {
              -webkit-transition-property: top;
              -moz-transition-property: top;
              -o-transition-property: top;
              -ms-transition-property: top;
              transition-property: top;
              -webkit-transition-timing-function: cubic-bezier(.175, .885, .32, 1.15);
              transition-timing-function: cubic-bezier(.175, .885, .32, 1.15)
          }
          .tooltipster-fall.tooltipster-initial {
              top: 0!important
          }
          .tooltipster-fall.tooltipster-dying {
              -webkit-transition-property: all;
              -moz-transition-property: all;
              -o-transition-property: all;
              -ms-transition-property: all;
              transition-property: all;
              top: 0!important;
              opacity: 0
          }
          .tooltipster-slide {
              -webkit-transition-property: left;
              -moz-transition-property: left;
              -o-transition-property: left;
              -ms-transition-property: left;
              transition-property: left;
              -webkit-transition-timing-function: cubic-bezier(.175, .885, .32, 1);
              -webkit-transition-timing-function: cubic-bezier(.175, .885, .32, 1.15);
              -moz-transition-timing-function: cubic-bezier(.175, .885, .32, 1.15);
              -ms-transition-timing-function: cubic-bezier(.175, .885, .32, 1.15);
              -o-transition-timing-function: cubic-bezier(.175, .885, .32, 1.15);
              transition-timing-function: cubic-bezier(.175, .885, .32, 1.15)
          }
          .tooltipster-slide.tooltipster-initial {
              left: -40px!important
          }
          .tooltipster-slide.tooltipster-dying {
              -webkit-transition-property: all;
              -moz-transition-property: all;
              -o-transition-property: all;
              -ms-transition-property: all;
              transition-property: all;
              left: 0!important;
              opacity: 0
          }
          @keyframes tooltipster-fading {
              0% {
                  opacity: 0
              }
              100% {
                  opacity: 1
              }
          }
          .tooltipster-update-fade {
              animation: tooltipster-fading .4s
          }
          @keyframes tooltipster-rotating {
              25% {
                  transform: rotate(-2deg)
              }
              75% {
                  transform: rotate(2deg)
              }
              100% {
                  transform: rotate(0)
              }
          }
          .tooltipster-update-rotate {
              animation: tooltipster-rotating .6s
          }
          @keyframes tooltipster-scaling {
              50% {
                  transform: scale(1.1)
              }
              100% {
                  transform: scale(1)
              }
          }
          .tooltipster-update-scale {
              animation: tooltipster-scaling .6s
          }
          .tooltipster-sidetip .tooltipster-box {
              background: #f6f6f6;
              border: 2px solid #f6f6f6;
              border-radius: 4px
          }
          .tooltipster-sidetip.tooltipster-bottom .tooltipster-box {
              margin-top: 8px
          }
          .tooltipster-sidetip.tooltipster-left .tooltipster-box {
              margin-right: 8px
          }
          .tooltipster-sidetip.tooltipster-right .tooltipster-box {
              margin-left: 8px
          }
          .tooltipster-sidetip.tooltipster-top .tooltipster-box {
              margin-bottom: 8px
          }
          .tooltipster-sidetip .tooltipster-content {
              color: #a0a0a0;
              line-height: 18px;
              padding: 6px 14px
          }
          .tooltipster-sidetip .tooltipster-arrow {
              overflow: hidden;
              position: absolute
          }
          .tooltipster-sidetip.tooltipster-bottom .tooltipster-arrow {
              height: 10px;
              margin-left: -10px;
              top: 0;
              width: 20px
          }
          .tooltipster-sidetip.tooltipster-left .tooltipster-arrow {
              height: 20px;
              margin-top: -10px;
              right: 0;
              top: 0;
              width: 10px
          }
          .tooltipster-sidetip.tooltipster-right .tooltipster-arrow {
              height: 20px;
              margin-top: -10px;
              left: 0;
              top: 0;
              width: 10px
          }
          .tooltipster-sidetip.tooltipster-top .tooltipster-arrow {
              bottom: 0;
              height: 10px;
              margin-left: -10px;
              width: 20px
          }
          .tooltipster-sidetip .tooltipster-arrow-background,
          .tooltipster-sidetip .tooltipster-arrow-border {
              height: 0;
              position: absolute;
              width: 0
          }
          .tooltipster-sidetip .tooltipster-arrow-background {
              border: 10px solid transparent
          }
          .tooltipster-sidetip.tooltipster-bottom .tooltipster-arrow-background {
              border-bottom-color: #f6f6f6;
              left: 0;
              top: 3px
          }
          .tooltipster-sidetip.tooltipster-left .tooltipster-arrow-background {
              border-left-color: #f6f6f6;
              left: -3px;
              top: 0
          }
          .tooltipster-sidetip.tooltipster-right .tooltipster-arrow-background {
              border-right-color: #f6f6f6;
              left: 3px;
              top: 0
          }
          .tooltipster-sidetip.tooltipster-top .tooltipster-arrow-background {
              border-top-color: #f6f6f6;
              left: 0;
              top: -3px
          }
          .tooltipster-sidetip .tooltipster-arrow-border {
              border: 10px solid transparent;
              left: 0;
              top: 0
          }
          .tooltipster-sidetip.tooltipster-bottom .tooltipster-arrow-border {
              border-bottom-color: #f6f6f6
          }
          .tooltipster-sidetip.tooltipster-left .tooltipster-arrow-border {
              border-left-color: #f6f6f6
          }
          .tooltipster-sidetip.tooltipster-right .tooltipster-arrow-border {
              border-right-color: #f6f6f6
          }
          .tooltipster-sidetip.tooltipster-top .tooltipster-arrow-border {
              border-top-color: #f6f6f6
          }
          .tooltipster-sidetip .tooltipster-arrow-uncropped {
              position: relative
          }
          .tooltipster-sidetip.tooltipster-bottom .tooltipster-arrow-uncropped {
              top: -10px
          }
          .tooltipster-sidetip.tooltipster-right .tooltipster-arrow-uncropped {
              left: -10px
          }
        ` }} />
        <span className="af-view">
          <div className="af-class-body">
            <div className="af-class-topbar">
              <div className="af-class-topbarcontain">
                <div className="w-hidden-medium w-hidden-small w-hidden-tiny w-row">
                  <div className="af-class-topbarleftcol w-col w-col-3">
                    <div className="af-class-logotext">Players.Bid</div>
                  </div>
                  <div className="w-col w-col-6">
                    <div className="w-form">
                      <form id="email-form" name="email-form" data-name="Email Form" className="af-class-form"><input type="text" className="af-class-searchbar w-input" maxLength={256} name="Search" data-name="Search" placeholder="Search" id="Search" />
                        <div data-delay={0} data-hover={1} className="w-dropdown">
                          <div className="af-class-searchdrop w-dropdown-toggle">
                            <div className="w-icon-dropdown-toggle" />
                            <div>Players</div>
                          </div>
                          <nav className="af-class-droplistsearch w-dropdown-list"><a href="#" className="af-class-ddcatlink w-dropdown-link">Sports</a><a href="#" className="af-class-ddcatlink af-class-ddbottom w-dropdown-link">Clubs</a></nav>
                        </div>
                      </form>
                      <div className="af-class-successsearch w-form-done" />
                      <div className="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                      </div>
                    </div>
                  </div>
                  <div className="af-class-topbarrightcolumn w-col w-col-3">
                    <div className="af-class-topavatar" />
                    <div className="af-class-div-block">
                      <div className="af-class-nametext">Essie Howell</div>
                      <div data-delay={0} className="af-class-dropdown-2 w-dropdown">
                        <div className="af-class-topplusbutton w-dropdown-toggle">
                          <div>+</div>
                        </div>
                        <nav className="af-class-profiledropdowncontain w-dropdown-list">
                          <a href="#" data-ix="new-interaction-2" className="af-class-leftmenulink af-class-leftlogout af-class-toplogout w-inline-block">
                            <div className="w-row">
                              <div className="w-hidden-main w-hidden-medium w-hidden-small w-hidden-tiny w-col w-col-2">
                                <div className="af-class-intext">i</div>
                              </div>
                              <div className="w-col w-col-2">
                                <div className="af-class-icontectleft af-class-iconbell">H</div>
                              </div>
                              <div className="w-col w-col-8">
                                <div className="af-class-leftlinktext">Inbox</div>
                              </div>
                            </div>
                          </a>
                          <a href="#" className="af-class-leftmenulink af-class-leftlogout af-class-toplogout w-inline-block">
                            <div className="w-row">
                              <div className="w-hidden-main w-hidden-medium w-hidden-small w-hidden-tiny w-col w-col-2">
                                <div className="af-class-intext">i</div>
                              </div>
                              <div className="w-col w-col-2">
                                <div className="af-class-icontectleft">D</div>
                              </div>
                              <div className="w-col w-col-8">
                                <div className="af-class-leftlinktext">Profile</div>
                              </div>
                            </div>
                          </a>
                          <a href="#" className="af-class-leftmenulink af-class-leftlogout af-class-toplogout w-inline-block">
                            <div className="w-row">
                              <div className="w-hidden-main w-hidden-medium w-hidden-small w-hidden-tiny w-col w-col-2">
                                <div className="af-class-intext">i</div>
                              </div>
                              <div className="w-col w-col-2">
                                <div className="af-class-icontectleft">F</div>
                              </div>
                              <div className="w-col w-col-8">
                                <div className="af-class-leftlinktext">Log Out</div>
                              </div>
                            </div>
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-collapse="medium" data-animation="default" data-duration={400} data-doc-height={1} role="banner" className="af-class-navbar w-hidden-main w-nav">
                <div className="af-class-row-3 w-row">
                  <div className="af-class-column-24 w-hidden-tiny w-col w-col-5 w-col-small-6">
                    <div className="af-class-nametext af-class-leftnametext af-class-mobilenavwelcome">Welcome, Essie!</div>
                  </div>
                  <div className="af-class-column-23 w-col w-col-7 w-col-small-6">
                    <div className="af-class-topavatar" />
                    <div className="af-class-div-block">
                      <div className="af-class-nametext">Essie Howell</div>
                    </div>
                  </div>
                </div>
                <div className="w-container">
                  <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                    <a href="#" className="af-class-leftmenulink w-inline-block">
                      <div className="w-row">
                        <div className="w-hidden-medium w-hidden-small w-hidden-tiny w-col w-col-2 w-col-small-4 w-col-tiny-4">
                          <div className="af-class-intext">i</div>
                        </div>
                        <div className="w-col w-col-2 w-col-small-4 w-col-tiny-4">
                          <div className="af-class-icontectleft af-class-iconbell">H</div>
                        </div>
                        <div className="w-col w-col-8 w-col-small-4 w-col-tiny-4">
                          <div className="af-class-leftlinktext">Inbox</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="af-class-leftmenulink w-inline-block">
                      <div className="w-row">
                        <div className="w-hidden-medium w-hidden-small w-hidden-tiny w-col w-col-2 w-col-small-4 w-col-tiny-4">
                          <div className="af-class-intext">i</div>
                        </div>
                        <div className="w-col w-col-2 w-col-small-4 w-col-tiny-4">
                          <div className="af-class-icontectleft">G</div>
                        </div>
                        <div className="w-col w-col-8 w-col-small-4 w-col-tiny-4">
                          <div className="af-class-leftlinktext">Overview</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="af-class-leftmenulink w-inline-block">
                      <div className="w-row">
                        <div className="w-hidden-medium w-hidden-small w-hidden-tiny w-col w-col-2 w-col-small-4 w-col-tiny-4">
                          <div className="af-class-intext">i</div>
                        </div>
                        <div className="w-col w-col-2 w-col-small-4 w-col-tiny-4">
                          <div className="af-class-icontectleft">z</div>
                        </div>
                        <div className="w-col w-col-8 w-col-small-4 w-col-tiny-4">
                          <div className="af-class-leftlinktext">Reservation</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="af-class-leftmenulink af-class-currentlinkleft w-inline-block">
                      <div className="w-row">
                        <div className="w-hidden-medium w-hidden-small w-hidden-tiny w-col w-col-2 w-col-small-4 w-col-tiny-4">
                          <div className="af-class-intext">i</div>
                        </div>
                        <div className="w-col w-col-2 w-col-small-4 w-col-tiny-4">
                          <div className="af-class-icontectleft">x</div>
                        </div>
                        <div className="w-col w-col-8 w-col-small-4 w-col-tiny-4">
                          <div className="af-class-leftlinktext">Meeting</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="af-class-leftmenulink w-inline-block">
                      <div className="w-row">
                        <div className="w-hidden-medium w-hidden-small w-hidden-tiny w-col w-col-2 w-col-small-4 w-col-tiny-4">
                          <div className="af-class-intext">i</div>
                        </div>
                        <div className="w-col w-col-2 w-col-small-4 w-col-tiny-4">
                          <div className="af-class-icontectleft">A</div>
                        </div>
                        <div className="w-col w-col-8 w-col-small-4 w-col-tiny-4">
                          <div className="af-class-leftlinktext">Customers</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="af-class-leftmenulink w-inline-block">
                      <div className="w-row">
                        <div className="w-hidden-medium w-hidden-small w-hidden-tiny w-col w-col-2 w-col-small-4 w-col-tiny-4">
                          <div className="af-class-intext">i</div>
                        </div>
                        <div className="w-col w-col-2 w-col-small-4 w-col-tiny-4">
                          <div className="af-class-icontectleft">B</div>
                        </div>
                        <div className="w-col w-col-8 w-col-small-4 w-col-tiny-4">
                          <div className="af-class-leftlinktext">Ticket</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="af-class-leftmenulink w-inline-block">
                      <div className="w-row">
                        <div className="w-hidden-medium w-hidden-small w-hidden-tiny w-col w-col-2 w-col-small-4 w-col-tiny-4">
                          <div className="af-class-intext">i</div>
                        </div>
                        <div className="w-col w-col-2 w-col-small-4 w-col-tiny-4">
                          <div className="af-class-icontectleft">C</div>
                        </div>
                        <div className="w-col w-col-8 w-col-small-4 w-col-tiny-4">
                          <div className="af-class-leftlinktext">Support</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="af-class-leftmenulink w-inline-block">
                      <div className="w-row">
                        <div className="w-hidden-medium w-hidden-small w-hidden-tiny w-col w-col-2 w-col-small-4 w-col-tiny-4">
                          <div className="af-class-intext">i</div>
                        </div>
                        <div className="w-col w-col-2 w-col-small-4 w-col-tiny-4">
                          <div className="af-class-icontectleft">D</div>
                        </div>
                        <div className="w-col w-col-8 w-col-small-4 w-col-tiny-4">
                          <div className="af-class-leftlinktext">Profile</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="af-class-leftmenulink af-class-leftlogout w-inline-block">
                      <div className="w-row">
                        <div className="w-hidden-medium w-hidden-small w-hidden-tiny w-col w-col-2 w-col-small-4 w-col-tiny-4">
                          <div className="af-class-intext">i</div>
                        </div>
                        <div className="w-col w-col-2 w-col-small-4 w-col-tiny-4">
                          <div className="af-class-icontectleft">F</div>
                        </div>
                        <div className="w-col w-col-8 w-col-small-4 w-col-tiny-4">
                          <div className="af-class-leftlinktext">Log Out</div>
                        </div>
                      </div>
                    </a>
                  </nav>
                  <div className="w-row">
                    <div className="w-col w-col-3 w-col-small-3 w-col-tiny-3">
                      <a href="#" className="af-class-brand w-nav-brand">
                        <div className="af-class-logotext af-class-navbarlogotext">Players.Bid</div>
                      </a>
                    </div>
                    <div className="w-col w-col-6 w-col-small-6 w-col-tiny-6">
                      <div className="w-form">
                        <form id="email-form" name="email-form" data-name="Email Form" className="af-class-form"><input type="text" className="af-class-searchbar af-class-mobilesearch w-input" maxLength={256} name="Search-2" data-name="Search 2" placeholder="Search" id="Search-2" /></form>
                        <div className="af-class-successsearch w-form-done" />
                        <div className="w-form-fail">
                          <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                      </div>
                    </div>
                    <div className="w-col w-col-3 w-col-small-3 w-col-tiny-3">
                      <div className="af-class-hamburger w-nav-button">
                        <div className="w-icon-nav-menu" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-section">
              <a href="#" data-ix="new-interaction-2" className="af-class-inboxdiv w-hidden-small w-hidden-tiny w-inline-block">
                <div className="af-class-bell">H</div>
              </a>
              <div className="af-class-pagecontain">
                <div className="af-class-div-block-6">
                  <div className="af-class-menuleft af-class-flextleft">
                    <div className="af-class-row w-row">
                      <div className="w-col w-col-2">
                        <div className="af-class-topavatar af-class-leftavatar" />
                      </div>
                      <div className="w-col w-col-10">
                        <div className="af-class-nametext af-class-leftnametext">Welcome, Essie!</div>
                        <div className="af-class-nametext af-class-leftnametext af-class-detailtext">Experienced Supporter</div>
                      </div>
                    </div>
                    <div className="af-class-leftmenucontain">
                      <a href="#" className="af-class-leftmenulink af-class-currentlinkleft w-inline-block">
                        <div className="w-row">
                          <div className="w-col w-col-2">
                            <div className="af-class-intext">i</div>
                          </div>
                          <div className="w-col w-col-2">
                            <div className="af-class-icontectleft">G</div>
                          </div>
                          <div className="w-col w-col-8">
                            <div className="af-class-leftlinktext">Home</div>
                          </div>
                        </div>
                      </a>
                      <a href="sports.html" className="af-class-leftmenulink w-inline-block">
                        <div className="w-row">
                          <div className="w-col w-col-2">
                            <div className="af-class-intext">i</div>
                          </div>
                          <div className="w-col w-col-2">
                            <div className="af-class-icontectleft">z</div>
                          </div>
                          <div className="w-col w-col-8">
                            <div className="af-class-leftlinktext">Sports</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="af-class-leftmenulink w-inline-block">
                        <div className="w-row">
                          <div className="w-col w-col-2">
                            <div className="af-class-intext">i</div>
                          </div>
                          <div className="w-col w-col-2">
                            <div className="af-class-icontectleft">x</div>
                          </div>
                          <div className="w-col w-col-8">
                            <div className="af-class-leftlinktext">Clubs</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="af-class-leftmenulink w-inline-block">
                        <div className="w-row">
                          <div className="w-col w-col-2">
                            <div className="af-class-intext">i</div>
                          </div>
                          <div className="w-col w-col-2">
                            <div className="af-class-icontectleft">A</div>
                          </div>
                          <div className="w-col w-col-8">
                            <div className="af-class-leftlinktext">Players</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="af-class-leftmenulink w-inline-block">
                        <div className="w-row">
                          <div className="w-col w-col-2">
                            <div className="af-class-intext">i</div>
                          </div>
                          <div className="w-col w-col-2">
                            <div className="af-class-icontectleft">B</div>
                          </div>
                          <div className="w-col w-col-8">
                            <div className="af-class-leftlinktext">Data Market</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="af-class-leftmenulink w-inline-block">
                        <div className="w-row">
                          <div className="w-col w-col-2">
                            <div className="af-class-intext">i</div>
                          </div>
                          <div className="w-col w-col-2">
                            <div className="af-class-icontectleft">C</div>
                          </div>
                          <div className="w-col w-col-8">
                            <div className="af-class-leftlinktext">Support</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="af-class-leftmenulink w-inline-block">
                        <div className="w-row">
                          <div className="w-col w-col-2">
                            <div className="af-class-intext">i</div>
                          </div>
                          <div className="w-col w-col-2">
                            <div className="af-class-icontectleft">D</div>
                          </div>
                          <div className="w-col w-col-8">
                            <div className="af-class-leftlinktext">Profile</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="af-class-leftmenulink af-class-leftlogout w-inline-block">
                        <div className="w-row">
                          <div className="w-col w-col-2">
                            <div className="af-class-intext">i</div>
                          </div>
                          <div className="w-col w-col-2">
                            <div className="af-class-icontectleft">F</div>
                          </div>
                          <div className="w-col w-col-8">
                            <div className="af-class-leftlinktext">Log Out</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="af-class-div-block-7 w-clearfix">
                    <h1 className="af-class-meetingsh1">Top Player Auctions Ending Today</h1>
                    <div data-ix="meetingdetail1" className="af-class-meetingdetailcontain af-class-float-left">
                      <div className="af-class-meetingdetailmiddlediv">
                        <div className="w-row">
                          <div className="af-class-column-37 w-col w-col-6 w-col-medium-6 w-col-small-6 w-col-tiny-6">
                            <div className="af-class-div-block-12">
                              <div className="af-class-text-block"><strong className="af-class-sport-icon">&nbsp;</strong></div>
                              <div className="af-class-playername"><strong> Eliakim Coulibaly (</strong><a href="https://www.itftennis.com/en/players/eliakim-coulibaly/800515383/civ/jt/s/overview/" target="_blank"><strong>ITF&nbsp;Junior&nbsp;#22</strong></a><strong>)</strong></div>
                            </div>
                          </div>
                          <div className="w-col w-col-6 w-col-medium-6 w-col-small-6 w-col-tiny-6">
                            <div className="af-class-goingtext af-class-notgoing"><strong>Player Value: $1.2M</strong> (10%/10Y)</div>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-meetingdetailtopdiv">
                        <div className="af-class-columns w-row">
                          <div className="af-class-column-10 w-col w-col-6">
                            <div style={{paddingTop: '56.17021276595745%'}} id="w-node-f38501765ba7-a9ed24e8" className="w-embed-youtubevideo af-class-youtube"><iframe src="https://www.youtube.com/embed/jSsinLGGHH0?rel=0&controls=1&autoplay=1&mute=1&start=0" frameBorder={0} style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'auto'}} allow="autoplay; encrypted-media" allowFullScreen /></div>
                          </div>
                          <div className="w-col w-col-6">
                            <div className="af-class-div-block-11">
                              <div className="af-class-html-embed w-embed w-script">
                                <canvas id="myChart1" width={160} height={120} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a href="#" className="af-class-bottommorelink af-class-bottommoreright w-inline-block">
                        <div id="countdown1" className="af-class-detailscallinktext">Bid Now! 00:45:00 Left</div>
                      </a>
                    </div>
                    <div data-ix="meetingdetail1" className="af-class-meetingdetailcontain af-class-float-left">
                      <div className="af-class-meetingdetailmiddlediv">
                        <div className="w-row">
                          <div className="af-class-column-37 w-col w-col-6 w-col-medium-6 w-col-small-6 w-col-tiny-6">
                            <div className="af-class-div-block-12">
                              <div className="af-class-text-block"><strong className="af-class-sport-icon">&nbsp;</strong></div>
                              <div className="af-class-playername"><strong> Eliakim Coulibaly (</strong><a href="https://www.itftennis.com/en/players/eliakim-coulibaly/800515383/civ/jt/s/overview/" target="_blank"><strong>ITF&nbsp;Junior&nbsp;#22</strong></a><strong>)</strong></div>
                            </div>
                          </div>
                          <div className="w-col w-col-6 w-col-medium-6 w-col-small-6 w-col-tiny-6">
                            <div className="af-class-goingtext af-class-notgoing"><strong>Player Value: $1.2M</strong> (10%/10Y)</div>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-meetingdetailtopdiv">
                        <div className="af-class-columns w-row">
                          <div className="af-class-column-10 w-col w-col-6">
                            <div style={{paddingTop: '56.17021276595745%'}} id="w-node-589e2a1278c0-a9ed24e8" className="w-embed-youtubevideo af-class-youtube"><iframe src="https://www.youtube.com/embed/jSsinLGGHH0?rel=0&controls=1&autoplay=1&mute=1&start=0" frameBorder={0} style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'auto'}} allow="autoplay; encrypted-media" allowFullScreen /></div>
                          </div>
                          <div className="w-col w-col-6">
                            <div className="af-class-div-block-11">
                              <div className="af-class-html-embed w-embed w-script">
                                <canvas id="myChart1" width={160} height={120} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a href="#" className="af-class-bottommorelink af-class-bottommoreright w-inline-block">
                        <div id="countdown1" className="af-class-detailscallinktext">Bid Now! 00:45:00 Left</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-inboxcontain">
                <div className="af-class-iteminboxdiv w-clearfix">
                  <div className="af-class-meetingrightdiv">
                    <div>Virgil added you in the meeting.</div>
                  </div>
                  <div className="af-class-iteminboxdetaildiv">
                    <div className="af-class-div-block-8" />
                    <div className="af-class-iteminboxdetailtext">9:59</div>
                  </div>
                  <div className="af-class-calimginbox" />
                  <div className="af-class-togglediv">
                    <div className="af-class-div-block-9">
                      <a href="#" data-ix="new-interaction" className="af-class-link-block w-inline-block">
                        <div className="af-class-toglebutton" />
                      </a>
                    </div>
                    <div className="af-class-div-block-10">
                      <div className="af-class-goingtextinbox">Going</div>
                    </div>
                  </div>
                </div>
                <div className="af-class-iteminboxdiv">
                  <div className="af-class-iteminboxdetaildiv">
                    <div className="af-class-div-block-8" />
                    <div className="af-class-iteminboxdetailtext">10:30</div>
                  </div>
                  <div>
                    <div>Sales Presentation with Miguel - Daily Catch Up</div>
                    <div className="af-class-inboxnumbertext">20 people joining</div>
                  </div>
                </div>
                <div className="af-class-iteminboxdiv">
                  <div className="af-class-iteminboxdetaildiv">
                    <div className="af-class-div-block-8" />
                    <div className="af-class-iteminboxdetailtext">12:45</div>
                  </div>
                  <div>
                    <div>Team voting for outing</div>
                    <div className="w-form">
                      <form id="email-form-2" name="email-form-2" data-name="Email Form 2" className="af-class-form-2"><label className="w-checkbox af-class-checkbox-field"><input type="checkbox" id="checkbox" name="checkbox" data-name="Checkbox" className="w-checkbox-input" /><span htmlFor="checkbox" className="w-form-label">Dinner</span></label><label className="w-checkbox af-class-checkbox-field"><input type="checkbox" id="checkbox-4" name="checkbox-4" data-name="Checkbox 4" className="w-checkbox-input" /><span htmlFor="checkbox-4" className="w-form-label">Movie - Spiderman</span></label><label className="w-checkbox af-class-checkbox-field"><input type="checkbox" id="checkbox-3" name="checkbox-3" data-name="Checkbox 3" className="w-checkbox-input" /><span htmlFor="checkbox-3" className="w-form-label">Football Tournament</span></label><label className="w-checkbox af-class-checkbox-field"><input type="checkbox" id="checkbox-2" name="checkbox-2" data-name="Checkbox 2" className="w-checkbox-input" /><span htmlFor="checkbox-2" className="w-form-label">Mountain Trip</span></label><input type="submit" defaultValue="Submit" data-wait="Please wait..." className="af-class-submitbutton w-button" /></form>
                      <div className="af-class-success w-form-done">
                        <div>Thank you! We can't wait to reward this team for all it's hard work!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="af-class-iteminboxdiv af-class-itembuttondiv">
                  <a href="#" className="af-class-inboxbutton af-class-leftinboxbutton w-inline-block">
                    <div>Refresh</div>
                  </a>
                  <a href="#" data-ix="new-interaction-3" className="af-class-inboxbutton w-inline-block">
                    <div>Close</div>
                  </a>
                </div>
                <div className="af-class-iteminboxdiv af-class-bottombelldiv w-clearfix">
                  <div className="af-class-meetingrightdiv" />
                  <div className="w-row">
                    <div className="w-col w-col-4">
                      <div className="af-class-calimginbox af-class-bottombellimg" />
                    </div>
                    <div className="w-col w-col-8">
                      <div>Inbox</div>
                      <div className="af-class-inboxdate w-embed w-script">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default IndexView

/* eslint-enable */
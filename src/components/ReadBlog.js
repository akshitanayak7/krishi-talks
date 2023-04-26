import React from 'react'
import '../App.css'

export const ReadBlog = () => {
  return (
    <>
     <div className="container-fluid px-0 ReadBlog">
        <div className="row ">
            <img src="/images/news3.jpg" className="img-fluid img1 shadow" alt=""/>
        </div>
    </div>

    <div className="container read-content">
        <div className="row border border-white mt-4">
            <div className="col ">
                <img className="rounded-circle d-inline shadow" src="/images/writer.webp" alt="" width="65px"/>
                <div className="container  d-inline">

                    <div className="text-wrap  d-inline-block align-middle heading" style={{color:"#005718",width:'11rem'}}>
                      Blog By : Deepika bhatt  31st December 2023
                    </div>
                </div>
              </div>
        </div>
        <div className="row mt-4">
            <div className="col">
                <p className="h3 heading fw-bold" style={{color:"#005718"}}>How Distilling Almost Killed—Then Revived—One Of
                    America’s Heritage Crops</p>
            </div>

        </div>

        <div className="row mt-4">
            <div className="col ">
                <p className="text-break paragraph para"> Bloody Butcher Corn, once
                    grown widely for use in moonshine, was on the brink of
                    extinction until modern distillers brought it back from the dead.</p>

                <p className=" heading paragraph para"> Along the eastern
                    seaboard, there’s a growing network of folks interested in reanimating the
                    dead—or, at least, the nearly dead. “There’s definitely a robust network on the eastern seaboard of
                    people in brewing, distilling, academics and malting that are building on a lot of these storylines
                    and getting some of these varieties back into the public’s hands,” says Brent Manning, certified
                    cicerone (like a historian for beer and spirits) and co-founder of Asheville, NC-based Riverbend
                    Malt House. He’s talking specifically about Bloody Butcher Corn—a hybrid of Hackberry Dent and Red
                    Corn, with deep maroon kernels and a complex taste. It was named for the way it resembled a bloody
                    butcher’s apron when milled.
                </p>
            </div>
        </div>

        <div className="row mt-4">
            <div className="col">
                <img src="/images/news4.jpeg" className="img-fluid img2 shadow" style={{width:'inherit',height:'400px'}} alt=""/>
            </div>
        </div>

        <div className="row mt-4">
            <div className="col ">
                <p className="text-break paragraph para mt-3"> But at the height of the
                    Industrial Revolution, that all changed. Corn became increasingly commercially grown and farmed, and
                    many heirloom varieties of the crop decreased or even disappeared. American farmers mainly turned
                    away from planting these legacy seeds as other varieties grew in prominence.
                    “It’s a really interesting arc from the early days of colonizing America, which was growing whatever
                    we could get. Then when we got into the industrial age, it was a very quick flip to just wanting
                    something that we could make easily,” says Manning.</p>

                <p className=" heading paragraph para">It turns out that, by 1890,
                    according to a research paper by David Shields, an English professor and heirloom foodways expert at
                    the University of South Carolina, that “consistency achieved despite differences in weather,
                    terroir, grain variety, and formulation” was the top priority for farmers. Add to that the addition
                    of distillers looking to mute the flavor of the corn by adding other types of wheat and Shields says
                    that, from then on, there was “large-scale adoption of Reid’s Yellow Dent and its descendants such
                    as No. 2 Yellow Dent.” Bloody Butcher tends to grow a lower yield than other types of corn,
                    especially the yellow corn varieties. The increased demand for corn in larger quantities, namely in
                    the distilling industry, ended up swaying farmers to plant corn for which they would get paid the
                    most, says Manning. It is also a variety that, to this day, remains free pollinated. “Still today,
                    if they plant [Bloody Butcher] too close to other varieties, they can still have a situation where
                    it is not 100% red kernels that come out of the cob,” Manning explains.
                </p>
            </div>
        </div>

        <div className="row mt-4 text-center  mb-5">
            <div className="col  mb-5">
              <div className='d-inline'>
                <i class="fa-solid fa-heart fa-1x" style={{color: "#003912"}}></i>40
              </div>
              <div className='d-inline'>
                <i className="fa-solid fa-share-nodes px-5 fa-1x" style={{color: "#003912"}}></i>
              </div>
              <div className='d-inline'>
                <i className="fa-solid fa-bookmark fa-1x" style={{color: "#003912"}}></i>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ReadBlog

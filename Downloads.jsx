import React, { useState } from 'react'
import Style from './Gmax.module.css'
import { BiArrowToBottom } from "react-icons/bi";
import pdffile from './images/Saurabh__B.tech(Er.).pdf'
import { Document, Page } from '@react-pdf/renderer';



// const pdf_url='http://localhost:3000/Saurabh__B.tech(Er.).pdf'
// const img_url=''
// const csv_url=''
// const zip_url=''
export const Downloads = () => {
  const [numPage,setNumpage] = useState(null)
  const [pageNumber,setPageNUmber] = useState(1)

  const onDocumentSuccess =()=>{
    setNumpage(pageNumber)
  }
  
  return (
    <div className={Style.download}>
       <Document file={pdffile} onLoadSuccess={onDocumentSuccess}>
        <Page pageNumber={pageNumber}><BiArrowToBottom/></Page>
       </Document>
    </div>
  )
}

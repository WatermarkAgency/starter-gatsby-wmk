import React from 'react'

// import FeaturesBlock from './blocks/EvoFeaturesBlock'

const Flexible = (props) => (
        // Dynamic ACF Flexible Content Blocks handling
        props.blocks ? (<div className="flexible-content">
          {
              /* Render any found Flexible content blocks */
              props.blocks ? props.blocks.map((block,i)=>{
              /* Get block slug from ACF id */
              let slug = block.id ? block.id.split('_')[1] : 'block_error'
              /* Setup default JSX case */
              const blockClass = 'layout-block '+slug+'-block'
              let jsx = <div>{slug}</div>
              switch(true){
                  /* Assign jsx depending on matching slugs */
                //   case(slug === 'features'):
                //       jsx = <FeaturesBlock blockData={block}/>
                //       break
                  default:
              }
              return <div key={block.id+i} className={blockClass}>{jsx}</div>
              
          }) : null 
          }
      </div>) : null
)

export default Flexible
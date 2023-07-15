import React from 'react'

export const RenderIf: React.FC<{ condition: boolean }> = ({children, condition}) => <>
    {condition && children}
</>
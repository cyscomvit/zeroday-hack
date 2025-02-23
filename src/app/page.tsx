import { Button, Alert, AlertTitle, AlertDescription } from '@/components/ui'
import React from 'react'
import { Terminal } from 'lucide-react'

const HomePage = () => {
  return (
    <div>
        <div>Hello</div>
        <Button>This is a button</Button>
        An example alert component 
        <div className='w-96'>
          <Alert >
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components and dependencies to your app using the cli.
            </AlertDescription>
          </Alert>
        </div>
    </div>
  )
}

export default HomePage
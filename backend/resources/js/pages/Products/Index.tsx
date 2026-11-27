import { Head, Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface PageProps {
  flash?: {
    success?: string;
    errors?: Record<string, string>;
  };
}



export default function Index () {
    const {flash} =usePage().props as PageProps;
    return (
        <>
            <Head title="Products" />
         <div className="m-4">
          
            <Link href={create.url()}><Button>Create a Product</Button></Link>
         </div>
         <div className='m-4'>
            {flash.message && (
                  <Alert>
 <AlertCircle />
  <AlertTitle>Errors!</AlertTitle>
  <AlertDescription>
    <ul>
        {Object.entries(errors).map(([key,message]) =>(
            <li key={key}>{message as string}

            </li>
        ))}
    </ul>
    
  </AlertDescription>
  
</Alert> 
            )
         </div>
        </>
    );
}

Index.layout = {
    breadcrumbs: [
        {
            title: 'Products',
            href: '/products',
        },
    ],
    interface PageProps{
      flash:   {
        message?: string
      }
    }
};

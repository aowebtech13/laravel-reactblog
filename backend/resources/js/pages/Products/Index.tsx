import { Head, Link } from '@inertiajs/react';
import Dashboard from '../dashboard';
import { Button } from '@/components/ui/button';
import { create } from '@/routes/products';



export default function Index () {
    return (
        <>
            <Head title="Products" />
         <div className="m-4">
          
            <Link href={create.url()}><Button>Create A Product</Button></Link>
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
};

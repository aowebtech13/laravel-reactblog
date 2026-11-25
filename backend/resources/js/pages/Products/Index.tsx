import { Head, Link } from '@inertiajs/react';
import Dashboard from '../dashboard';
import { Button } from '@/components/ui/button';



export default function Index () {
    return (
        <>
            <Head title="Products" />
         <div className="m-4">
            <h1 className="mb-4 text-xl font-semibold">Welcome adeyemi</h1>
            <Link href={route('products.create')}><Button>Create A Product</Button></Link>
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

import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { create } from '@/routes/products';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Field, FieldLabel, FieldSet, FieldGroup } from '@/components/ui/field';

export default function Index () {
    return (
        <>
            <Head title="Create New Products" />
        <div className="w-8/12 p-4">
            <form className="space-y-4">
              <FieldSet className="w-full max-w-xs">
                  <FieldGroup>
                    <Field>
                        <FieldLabel htmlFor="product-name">Name</FieldLabel>
                        <Input id="product-name" type="text" placeholder="Enter Product Name" />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="product-price">Price</FieldLabel>
                        <Input id="product-price" type="number" placeholder="Enter Price" />
                    </Field>
                  </FieldGroup>
              </FieldSet>
                 <div>
                    <Label htmlFor="product-description">Description </Label>
                   <Textarea id="product-description" placeholder="Enter Description"/>
                </div>
                <Button type="submit"> Add Product</Button>
            </form>
        </div>
        </>
    );
}

Index.layout = {
    breadcrumbs: [
        {
            title: 'Create New Products',
            href: '/products/create',
        },
    ],
};

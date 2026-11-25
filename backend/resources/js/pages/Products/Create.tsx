import { Head, Link } from '@inertiajs/react';
import Dashboard from '../dashboard';
import { Button } from '@/components/ui/button';
import { create } from '@/routes/products';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

import { Textarea } from '@/components/ui/textarea';
import { Field, FieldLabel, Fieldset,  FieldGroup } from '@/components/ui/field';



export default function Index () {
    return (
        <>
            <Head title="Create New Products" />
        <div className="w-8/12 p-4">
            <form className="space-y-4">
              <div>
                <fieldset className="w-full max-w-xs">
                    <FieldGroup>
                        <field>
  <fieldLabel htmlFor="Product Name" > Name</fieldLabel>
                        <input id="product-name" type="text" placeholder="Enter Product Name" ></input>
                        </field>

                         <field>
  <fieldLabel htmlFor="Product Name" > Price</fieldLabel>
                        <input id="product-price" type="number" placeholder="Enter Price" ></input>
                        </field>
                      
                    </FieldGroup>

                </fieldset>
              </div>
                 <div>
                    <Label htmlFor="Product Description">Description </Label>
                   <Textarea  placeholder="Enter Description"/>

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

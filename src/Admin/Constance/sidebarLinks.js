import {  bulk_file_icom, catagory_icon, dash_icon, Docs_icon, invoice_anal_icon, invoice_icon, pricing_icons, single_file_icon, tags_icons, tax_detail_icon, users_pg_icon } from "./icons";

const sidebarLinks =[
      {
            links : [{
                  icon : dash_icon,
                  title : 'Dashboard',
                  redairect : '/admin/dashboard'
            },{
                  icon : dash_icon,
                  title : 'List of Content',
                  redairect : '/admin/listofcontent'
            }
      ]
      },
      {
            links : [
                  {
                  icon : bulk_file_icom,
                  title : 'Bulk Upload',
                  redairect : '/admin/bulk-upload'
            }
      ]
      },
      {
            linksTitle : 'Account',
            links : [{
                  icon : invoice_icon,
                  title : 'Invoices',
                  redairect : '/admin/invoices'
            },{
                  icon : users_pg_icon,
                  title : 'Users',
                  redairect : '/admin/users'
            },{
                  icon : tax_detail_icon,
                  title : 'Tax Details',
                  redairect : '/admin/tax-details'
            },{
                  icon : invoice_anal_icon,
                  title : 'Invoice Anal..',
                  redairect : '/admin/invoice-anal'
            }]
      },
      {
            linksTitle : 'USERS',
            links : [{
                  icon : users_pg_icon,
                  title : 'User Pages',
                  redairect : '/admin/user'
            }]
      },
      {
            linksTitle : 'PAGES',
            links : [{
                  icon : pricing_icons,
                  title : 'Pricing',
                  redairect : '/admin/pricing'
            },{
                  icon : catagory_icon,
                  title : 'Category',
                  redairect : '/admin/categorytable'
            },{
                  icon : tags_icons,
                  title : 'Tags',
                  redairect : '/admin/tags'
            },{
                  icon : tags_icons,
                  title : 'Type Of Content',
                  redairect : '/admin/typeofcontent'
            ,},{
                  icon : tags_icons,
                  title : 'File Type',
                  redairect : '/admin/file-type'
            ,},{
                  icon : tags_icons,
                  title : 'License Type',
                  redairect : '/admin/license-type'
            ,},{
                  icon : tags_icons,
                  title : 'Size',
                  redairect : '/admin/size'
            ,}
      
      ]
      },
      {
            linksTitle : 'Help',
            links : [{
                  icon : Docs_icon,
                  title : 'Documentation',
                  redairect : '/admin/documentation'
            }]
      }
];

export default sidebarLinks;
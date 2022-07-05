
type SiteOption = {

}

export async function site(
    root: string = process.cwd(), 
    options: SiteOption
) {
    console.log('haha, this is site')
    console.log('root', root)
    console.log('options', options)
}
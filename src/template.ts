type Gist = {
  id: string;
  description: string;
};

type Props = {
  gists: Gist[];
};

export default (body: any, gists: Props) => ` 
<!DOCTYPE html> 
<html> 
  <head> 
    <meta charset="UTF-8"> 
  </head> 
  <body> 
    <div id="root">${body}</div> 
    <script>window.gists = ${JSON.stringify(gists)}</script> 
    <script src="/bundle.js"></script> 
  </body> 
</html> 
`;

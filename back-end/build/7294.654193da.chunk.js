"use strict";(self.webpackChunkback_end=self.webpackChunkback_end||[]).push([[7294,2559],{37294:(G,R,e)=>{e.d(R,{ProtectedCreatePage:()=>ee});var s=e(92132),m=e(55506),M=e(26384),p=e(56094),U=e(32559),B=e(15126),K=e(63299),O=e(67014),h=e(59080),o=e(79275),_=e(14718),D=e(21272),I=e(82437),S=e(61535),v=e(5790),b=e(12083),T=e(35223),k=e(5409),H=e(74930),ae=e(2600),oe=e(48940),re=e(41286),Q=e(56336),ie=e(13426),de=e(84624),y=e(77965),le=e(54257),Y=e(71210),N=e(51187),X=e(39404),_e=e(58692),Ee=e(501),ce=e(57646),Z=e(23120),he=e(44414),J=e(25962),ge=e(14664),Me=e(42588),W=e(90325),x=e(62785),j=e(87443),Pe=e(41032),V=e(22957),ue=e(93179),me=e(73055),w=e(15747),De=e(85306),Oe=e(26509),ve=e(32058),fe=e(81185),Ae=e(82261),Ce=e(55151),q=e(79077),Te=e(40990),F=e(14523);const ee=()=>{const se=(0,M.j)(p.s);return(0,s.jsx)(m.kz,{permissions:se.settings?.webhooks.create,children:(0,s.jsx)(U.E,{})})}},32559:(G,R,e)=>{e.r(R),e.d(R,{E:()=>te,a:()=>F,b:()=>Se});var s=e(92132),m=e(21272),M=e(83997),p=e(8361),U=e(43064),B=e(46462),K=e(66809),O=e(84843),h=e(81621),o=e(98765),_=e(30893),D=e(379),I=e(4181),S=e(50215),v=e(94061),b=e(90151),T=e(68074),k=e(7537),H=e(18629),ae=e(76517),oe=e(80782),re=e(55356),Q=e(85963),ie=e(4198),de=e(38413),y=e(55506),le=e(71389),Y=e(17703),N=e(26384),X=e(40990),_e=e(56094),Ee=e(21610),ce=e(5194),Z=e(68802),he=e(84795),J=e(54514),ge=e(98052),Me=e(46270),W=e(61535),x=e(54894),j=e(12083),Pe=e(89032),V=e(63891),ue=e(14523);const[me,w]=(0,Pe.q)("WebhookEvent"),De=({children:t})=>{const{formatMessage:n}=(0,x.A)(),{collectionTypes:a,isLoading:E}=(0,X.u)(),r=m.useMemo(()=>a.some(i=>i.options?.draftAndPublish===!0),[a]),c=n({id:"Settings.webhooks.form.events",defaultMessage:"Events"});return(0,s.jsx)(me,{isDraftAndPublish:r,children:(0,s.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:1,children:[(0,s.jsx)(p.d,{"aria-hidden":!0,children:c}),E&&(0,s.jsx)(U.a,{children:n({id:"Settings.webhooks.events.isLoading",defaultMessage:"Events loading"})}),(0,s.jsx)(Oe,{"aria-label":c,children:t})]})})},Oe=(0,V.Ay)(B.X)`
  tbody tr:nth-child(odd) {
    background: ${({theme:t})=>t.colors.neutral100};
  }

  thead th span {
    color: ${({theme:t})=>t.colors.neutral500};
  }

  td,
  th {
    padding-block-start: ${({theme:t})=>t.spaces[3]};
    padding-block-end: ${({theme:t})=>t.spaces[3]};
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr td:first-child {
    /**
     * Add padding to the start of the first column to avoid the checkbox appearing
     * too close to the edge of the table
     */
    padding-inline-start: ${({theme:t})=>t.spaces[2]};
  }
`,ve=t=>{const n=[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}];return t&&(n.push({id:"app.utils.publish",defaultMessage:"Publish"}),n.push({id:"app.utils.unpublish",defaultMessage:"Unpublish"})),n},fe=({getHeaders:t=ve})=>{const{isDraftAndPublish:n}=w("Headers"),{formatMessage:a}=(0,x.A)(),E=t(n);return(0,s.jsx)(K.r,{children:(0,s.jsxs)(O.N,{children:[(0,s.jsx)(h.e,{children:(0,s.jsx)(o.s,{children:a({id:"Settings.webhooks.event.select",defaultMessage:"Select event"})})}),E.map(r=>["app.utils.publish","app.utils.unpublish"].includes(r?.id??"")?(0,s.jsx)(h.e,{title:a({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"}),children:(0,s.jsx)(_.o,{variant:"sigma",textColor:"neutral600",children:a(r)})},r.id):(0,s.jsx)(h.e,{children:(0,s.jsx)(_.o,{variant:"sigma",textColor:"neutral600",children:a(r)})},r.id))]})})},Ae=({providedEvents:t})=>{const{isDraftAndPublish:n}=w("Body"),a=t||Ce(n),{values:E,handleChange:r}=(0,W.j7)(),c="events",i=E.events,u=[],f=i.reduce((d,l)=>{const P=l.split(".")[0];return d[P]||(d[P]=[]),d[P].push(l),d},{}),g=({target:{name:d,value:l}})=>{const P=new Set(i);l?P.add(d):P.delete(d),r({target:{name:c,value:Array.from(P)}})},A=({target:{name:d,value:l}})=>{const P=new Set(i);l?a[d].forEach(L=>{u.includes(L)||P.add(L)}):a[d].forEach(L=>P.delete(L)),r({target:{name:c,value:Array.from(P)}})};return(0,s.jsx)(D.f,{children:Object.entries(a).map(([d,l])=>(0,s.jsx)(q,{disabledEvents:u,name:d,events:l,inputValue:f[d],handleSelect:g,handleSelectAll:A},d))})},Ce=t=>{const n=["entry.create","entry.update","entry.delete"];return t&&n.push("entry.publish","entry.unpublish"),{entry:n,media:["media.create","media.update","media.delete"]}},q=({disabledEvents:t=[],name:n,events:a=[],inputValue:E=[],handleSelect:r,handleSelectAll:c})=>{const{formatMessage:i}=(0,x.A)(),u=a.filter(l=>!t.includes(l)),f=E.length>0,g=E.length===u.length,A=({target:{name:l}})=>{c({target:{name:l,value:!g}})},d=5;return(0,s.jsxs)(O.N,{children:[(0,s.jsx)(h.N,{children:(0,s.jsx)(I.S,{indeterminate:f&&!g,"aria-label":i({id:"global.select-all-entries",defaultMessage:"Select all entries"}),name:n,onChange:A,value:g,children:Te(n)})}),a.map(l=>(0,s.jsx)(h.N,{children:(0,s.jsx)(S.J,{disabled:t.includes(l),"aria-label":l,name:l,value:E.includes(l),onValueChange:P=>r({target:{name:l,value:P}})})},l)),a.length<d&&(0,s.jsx)(h.N,{colSpan:d-a.length})]})},Te=t=>t.replace(/-/g," ").split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()).join(" "),F={Root:De,Headers:fe,Body:Ae,Row:q},ee=()=>(0,s.jsxs)(F.Root,{children:[(0,s.jsx)(F.Headers,{}),(0,s.jsx)(F.Body,{})]}),se=()=>{const{formatMessage:t}=(0,x.A)(),{values:n,errors:a}=(0,W.j7)();return(0,s.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:1,children:[(0,s.jsx)(p.d,{children:t({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})}),(0,s.jsx)(v.a,{padding:8,background:"neutral100",hasRadius:!0,children:(0,s.jsx)(W.ED,{validateOnChange:!1,name:"headers",render:({push:E,remove:r})=>(0,s.jsxs)(b.x,{gap:4,children:[n.headers.map((c,i)=>{const u=a.headers?.[i],f=typeof u=="object"?u.key:void 0,g=typeof u=="object"?u.value:void 0;return(0,s.jsxs)(m.Fragment,{children:[(0,s.jsx)(T.E,{col:6,children:(0,s.jsx)(W.D0,{as:ye,name:`headers.${i}.key`,"aria-label":`row ${i+1} key`,label:t({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:f})}),(0,s.jsx)(T.E,{col:6,children:(0,s.jsxs)(M.s,{alignItems:"flex-end",children:[(0,s.jsx)(v.a,{style:{flex:1},children:(0,s.jsx)(W.D0,{as:k.k,name:`headers.${i}.value`,"aria-label":`row ${i+1} value`,label:t({id:"Settings.webhooks.value",defaultMessage:"Value"}),error:g})}),(0,s.jsx)(M.s,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:g?0:5,children:(0,s.jsx)(y.yX,{disabled:n.headers.length===1,onClick:()=>r(i),label:t({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:i+1})})})]})})]},`${i}.${c.key}`)}),(0,s.jsx)(T.E,{col:12,children:(0,s.jsx)(H.Q,{type:"button",onClick:()=>{E({key:"",value:""})},startIcon:(0,s.jsx)(ce.A,{}),children:t({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"})})})]})})})]})},ye=({name:t,onChange:n,value:a,...E})=>{const{values:{headers:r}}=(0,W.j7)(),[c,i]=m.useState([...We]);m.useEffect(()=>{const g=We.filter(A=>!r?.some(d=>d.key!==a&&d.key===A));i(g)},[r,a]);const u=g=>{n({target:{name:t,value:g}})},f=g=>{i(A=>[...A,g]),u(g)};return(0,s.jsx)(ae.nP,{...E,onClear:()=>u(""),onChange:u,onCreateOption:f,placeholder:"",value:a,children:c.map(g=>(0,s.jsx)(oe.j,{value:g,children:g},g))})},We=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],xe=({isPending:t,onCancel:n,response:a})=>{const{statusCode:E,message:r}=a??{},{formatMessage:c}=(0,x.A)();return(0,s.jsx)(v.a,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0,children:(0,s.jsxs)(b.x,{gap:4,style:{alignItems:"center"},children:[(0,s.jsx)(T.E,{col:3,children:(0,s.jsx)(_.o,{children:c({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"})})}),(0,s.jsx)(T.E,{col:3,children:(0,s.jsx)(Re,{isPending:t,statusCode:E})}),(0,s.jsx)(T.E,{col:6,children:t?(0,s.jsx)(M.s,{justifyContent:"flex-end",children:(0,s.jsx)("button",{onClick:n,type:"button",children:(0,s.jsxs)(M.s,{gap:2,alignItems:"center",children:[(0,s.jsx)(_.o,{textColor:"neutral400",children:c({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})}),(0,s.jsx)(z,{as:Z.A,color:"neutral400"})]})})}):(0,s.jsx)(pe,{statusCode:E,message:r})})]})})},z=V.Ay.svg(({theme:t,color:n})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;


  ${n?(0,V.AH)`
          path {
            fill: ${t.colors[n]};
          }
        `:""}
`),Re=({isPending:t,statusCode:n})=>{const{formatMessage:a}=(0,x.A)();return t||!n?(0,s.jsxs)(M.s,{gap:2,alignItems:"center",children:[(0,s.jsx)(z,{as:he.A}),(0,s.jsx)(_.o,{children:a({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"})})]}):n>=200&&n<300?(0,s.jsxs)(M.s,{gap:2,alignItems:"center",children:[(0,s.jsx)(z,{as:J.A,color:"success700"}),(0,s.jsx)(_.o,{children:a({id:"Settings.webhooks.trigger.success",defaultMessage:"success"})})]}):n>=300?(0,s.jsxs)(M.s,{gap:2,alignItems:"center",children:[(0,s.jsx)(z,{as:Z.A,color:"danger700"}),(0,s.jsxs)(_.o,{children:[a({id:"Settings.error",defaultMessage:"error"})," ",n]})]}):null},pe=({statusCode:t,message:n})=>{const{formatMessage:a}=(0,x.A)();return t?t>=200&&t<300?(0,s.jsx)(M.s,{justifyContent:"flex-end",children:(0,s.jsx)(_.o,{textColor:"neutral600",ellipsis:!0,children:a({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"})})}):t>=300?(0,s.jsx)(M.s,{justifyContent:"flex-end",children:(0,s.jsx)(M.s,{maxWidth:(0,y.a8)(250),justifyContent:"flex-end",title:n,children:(0,s.jsx)(_.o,{ellipsis:!0,textColor:"neutral600",children:n})})}):null:null},Le=({handleSubmit:t,triggerWebhook:n,isCreating:a,isTriggering:E,triggerResponse:r,data:c})=>{const{formatMessage:i}=(0,x.A)(),[u,f]=m.useState(!1),g=(0,N.p)(ee,async()=>(await e.e(8472).then(e.bind(e,28472))).EventsTableEE),A=l=>Object.keys(l).length?Object.entries(l).map(([P,L])=>({key:P,value:L})):[{key:"",value:""}],d=(0,W.Wx)({initialValues:{name:c?.name||"",url:c?.url||"",headers:A(c?.headers||{}),events:c?.events||[]},async onSubmit(l,P){await t(l,P),P.resetForm({values:l})},validationSchema:Ke({formatMessage:i}),validateOnChange:!1,validateOnBlur:!1});return g?(0,s.jsx)(W.QI,{value:d,children:(0,s.jsxs)(y.lV,{children:[(0,s.jsx)(re.Q,{primaryAction:(0,s.jsxs)(M.s,{gap:2,children:[(0,s.jsx)(Q.$,{onClick:()=>{n(),f(!0)},variant:"tertiary",startIcon:(0,s.jsx)(ge.A,{}),disabled:a||E,size:"L",children:i({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})}),(0,s.jsx)(Q.$,{startIcon:(0,s.jsx)(J.A,{}),type:"submit",size:"L",disabled:!d.dirty,loading:d.isSubmitting,children:i({id:"global.save",defaultMessage:"Save"})})]}),title:a?i({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):c?.name,navigationAction:(0,s.jsx)(Ee.N,{as:le.k2,startIcon:(0,s.jsx)(Me.A,{}),to:"/settings/webhooks",children:i({id:"global.back",defaultMessage:"Back"})})}),(0,s.jsx)(ie.s,{children:(0,s.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:4,children:[u&&(0,s.jsx)(xe,{isPending:E,response:r,onCancel:()=>f(!1)}),(0,s.jsx)(v.a,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0,children:(0,s.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:6,children:[(0,s.jsxs)(b.x,{gap:6,children:[(0,s.jsx)(T.E,{col:6,children:(0,s.jsx)(W.D0,{as:k.k,name:"name",error:d.errors.name,label:i({id:"global.name",defaultMessage:"Name"}),required:!0})}),(0,s.jsx)(T.E,{col:12,children:(0,s.jsx)(W.D0,{as:k.k,name:"url",error:d.errors.url,label:i({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0})})]}),(0,s.jsx)(se,{}),(0,s.jsx)(g,{})]})})]})})]})}):null},Ue=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,Be=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,Ke=({formatMessage:t})=>j.Ik().shape({name:j.Yj().required(t({id:"Settings.webhooks.validation.name.required",defaultMessage:"Name is required"})).matches(Ue,t({id:"Settings.webhooks.validation.name.regex",defaultMessage:"The name must start with a letter and only contain letters, numbers, spaces and underscores"})),url:j.Yj().required(t({id:"Settings.webhooks.validation.url.required",defaultMessage:"Url is required"})).matches(Be,t({id:"Settings.webhooks.validation.url.regex",defaultMessage:"The value must be a valid Url"})),headers:j.RZ(n=>{const a=j.YO();if(n.length===1){const{key:E,value:r}=n[0];if(!E&&!r)return a}return a.of(j.Ik().shape({key:j.Yj().required(t({id:"Settings.webhooks.validation.key",defaultMessage:"Key is required"})),value:j.Yj().required(t({id:"Settings.webhooks.validation.value",defaultMessage:"Value is required"}))}))}),events:j.YO()}),Ie=t=>({...t,headers:t.headers.reduce((n,{key:a,value:E})=>(a!==""&&(n[a]=E),n),{})}),te=()=>{const n=(0,Y.W5)("/settings/webhooks/:id")?.params.id,a=n==="create",{replace:E}=(0,Y.W6)(),r=(0,y.hN)(),{_unstableFormatAPIError:c,_unstableFormatValidationErrors:i}=(0,y.wq)(),u=m.useCallback(c,[]),{isLoading:f}=(0,X.u)(),[g,A]=m.useState(!1),[d,l]=m.useState(),{isLoading:P,webhooks:L,error:ne,createWebhook:be,updateWebhook:ke,triggerWebhook:$e}=(0,ue.u)({id:n},{skip:a});m.useEffect(()=>{ne&&r({type:"warning",message:u(ne)})},[ne,r,u]);const Ne=async()=>{try{A(!0);const $=await $e(n);if("error"in $){r({type:"warning",message:c($.error)});return}l($.data)}catch{r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}finally{A(!1)}},Fe=async($,je)=>{try{if(a){const C=await be(Ie($));if("error"in C){(0,N.x)(C.error)&&C.error.name==="ValidationError"?je.setErrors(i(C.error)):r({type:"warning",message:c(C.error)});return}r({type:"success",message:{id:"Settings.webhooks.created"}}),E(`/settings/webhooks/${C.data.id}`)}else{const C=await ke({id:n,...Ie($)});if("error"in C){(0,N.x)(C.error)&&C.error.name==="ValidationError"?je.setErrors(i(C.error)):r({type:"warning",message:c(C.error)});return}r({type:"success",message:{id:"notification.form.success.fields"}})}}catch{r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}};if(P||f)return(0,s.jsx)(y.Bl,{});const[He]=L??[];return(0,s.jsxs)(de.g,{children:[(0,s.jsx)(y.x7,{name:"Webhooks"}),(0,s.jsx)(Le,{data:He,handleSubmit:Fe,triggerWebhook:Ne,isCreating:a,isTriggering:g,triggerResponse:d})]})},Se=Object.freeze(Object.defineProperty({__proto__:null,EditPage:te,ProtectedEditPage:()=>{const t=(0,N.j)(_e.s);return(0,s.jsx)(y.kz,{permissions:t.settings?.webhooks.update,children:(0,s.jsx)(te,{})})}},Symbol.toStringTag,{value:"Module"}))},40990:(G,R,e)=>{e.d(R,{u:()=>K});var s=e(21272),m=e(55506),M=e(26384);const p=M.n.injectEndpoints({endpoints:O=>({getComponents:O.query({query:()=>({url:"/content-manager/components",method:"GET"}),transformResponse:h=>h.data}),getContentTypes:O.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:h=>h.data})}),overrideExisting:!1}),{useGetComponentsQuery:U,useGetContentTypesQuery:B}=p;function K(){const{_unstableFormatAPIError:O}=(0,m.wq)(),h=(0,m.hN)(),o=U(),_=B();s.useEffect(()=>{_.error&&h({type:"warning",message:O(_.error)})},[_.error,O,h]),s.useEffect(()=>{o.error&&h({type:"warning",message:O(o.error)})},[o.error,O,h]);const D=o.isLoading||_.isLoading,I=s.useMemo(()=>(_?.data??[]).filter(v=>v.kind==="collectionType"&&v.isDisplayed),[_?.data]),S=s.useMemo(()=>(_?.data??[]).filter(v=>v.kind!=="collectionType"&&v.isDisplayed),[_?.data]);return{isLoading:D,components:s.useMemo(()=>o?.data??[],[o?.data]),collectionTypes:I,singleTypes:S}}},14523:(G,R,e)=>{e.d(R,{u:()=>O});var s=e(26384);const m=s.n.injectEndpoints({endpoints:h=>({getWebhooks:h.query({query:o=>({url:`/admin/webhooks/${o?.id??""}`,method:"GET"}),transformResponse:o=>Array.isArray(o.data)?o.data:[o.data],providesTags:(o,_,D)=>typeof D=="object"&&"id"in D?[{type:"Webhook",id:D.id}]:[...o?.map(({id:I})=>({type:"Webhook",id:I}))??[],{type:"Webhook",id:"LIST"}]}),createWebhook:h.mutation({query:o=>({url:"/admin/webhooks",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:[{type:"Webhook",id:"LIST"}]}),updateWebhook:h.mutation({query:({id:o,..._})=>({url:`/admin/webhooks/${o}`,method:"PUT",data:_}),transformResponse:o=>o.data,invalidatesTags:(o,_,{id:D})=>[{type:"Webhook",id:D}]}),triggerWebhook:h.mutation({query:o=>({url:`/admin/webhooks/${o}/trigger`,method:"POST"}),transformResponse:o=>o.data}),deleteManyWebhooks:h.mutation({query:o=>({url:"/admin/webhooks/batch-delete",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:(o,_,{ids:D})=>D.map(I=>({type:"Webhook",id:I}))})}),overrideExisting:!1}),{useGetWebhooksQuery:M,useCreateWebhookMutation:p,useUpdateWebhookMutation:U,useTriggerWebhookMutation:B,useDeleteManyWebhooksMutation:K}=m,O=(h=void 0,o)=>{const{data:_,isLoading:D,error:I}=M(h,o),[S,{error:v}]=p(),[b,{error:T}]=U(),[k]=B(),[H]=K();return{webhooks:_,isLoading:D,error:I||v||T,createWebhook:S,updateWebhook:b,triggerWebhook:k,deleteManyWebhooks:H}}}}]);
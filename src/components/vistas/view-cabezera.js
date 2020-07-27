import { LitElement, html, css } from 'lit-element';

export class Cabezera extends LitElement {
    static get styles() {
        return css`
          .title {
              color:blue;
              padding-bottom: 10px;
              text-align:center;
              font-size: 30px;
          }
          h1 {
            font-family: Roboto;
            font-size: 26px;
            font-weight: 500;
            background-color: #7710d9;
            color: whitesmoke;
            text-align:center;
          }
          .red {
            color: red;
          }
          .blue {
            color: blue;
          }
          @media (max-width: 310px) {
            .title {
              padding-bottom: 5px;
              font-size: 20px;
            }
            h1 {
              font-size: 18px;
              padding: 5px;
            }
		      }
          @media (max-width: 210px) {
            .title {
              padding-bottom: 2px;
              font-size: 14px;
            }
            h1 {
              font-size: 12px;             
            }
		      } 
        `    ;
      }
  render() {
    return html`
    <p class="title">      
      <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAVCAYAAAAnzezqAAAG6ElEQVRIS62Wa2xUxxmGn3PZs2fXl92N767tYIMNBgx2lpiLMXFClAhSiEgqkaYJqDShUauqoRFpSX5VQlGlSlX/0B9VqRRFqKqatKVumiZN21QEFC6JmgRjSMFYNsZegy/rvZ7bTHWOMRCaH63UI80ZnYvme+adb753FCml5I7rC1597g9FUYLn//a/O8e//Vn5fwHcDrMAuND/TwD+QEIIwJ+lRKKgCA+RzyGyecjkUR0LXBekg4uOVvcl1Mo4qOq8Miio/l1Vg1EUqcD8p5uq3YS8XQE/uN8sKZBT11A/GcQ9/RHKwDn0iSu4mQxuoUDW9ih4kjk8irEY49EYDes30Lbty5R2teEZJhoqmuqvrhbM5caqBeP7wf8DYCG434+fG+TM08+Qmp1m2nMZw2XcgVkpmREuOUWSBRxX0La8DZnJkheCVs2ks3ERnWvX0bJmNTWtzURrq1FNk3kt5q8FgKD3FZgP7stOIP8vj7zByz/4PmvqanEMm6gbQrFnyIoSPnTAkC7Ctinmszy5dTMXBwa4FgojHI+orhOPRkmYUZpiMVrq6tnY08uynnUoFTFURcVPe9VH8sURQkg/qOt5jIyMks1meeHgK5w5+RFL4iVYSNyijWVomELHMQwKtoWmKjiOx4M9nXz2wWlCTQ1kpEXET4+ihR7S8cM4dh4nlyNhltLdlWRjby9dPeupa16ErqjzAJ7n8cnZAT67OEQymWTvSz+koSvJB0f7aVvbzflj7+MpRfSIgXBdbNfBkR7hjODezlbOv/lX2jf3cFd3O8dff5PLF/5FKKTj+fDCRioSTTWCZaiIlrDnmWfZ98J+SqKlKK5rB4L85o3fsmLZUsoScXa//Aobtu+g/9DPeOSbz/HOkSPMTI+T9yWbmUS4KmpIw9ANVjdWcOn4CZo29RBpqOBU/7ukrowHSSf8VPR3hiL8rYCmaoQMnccffZwDL75Ec0vzPICUKidOnqQyHiccjfD0gYM8sPOrHD10iO3feo63X3uNqcwk2ZkspSJP3gKzJEokHKKlXGPmwiAt27ZT3lzL+7/u59zpfwbZroYUFFXBDJtomoqQEjNi0rfxPvbve5GOVatRPM8NakihWGR6agotHObRvd9ly+49HD38c9Zt7uO9/n6yc3OomooZ8nAtlfJ4lE29naQvXeTDt96jatMGNj32MG8d/hWDZz4FKYiW6niqguYq2MILaotE44H7ejmw/wCrVnXdSkIhJLbjUrCK3P/ULjY++BDH/thPU3MdY8OXaW9PMnb9KtmJa+SLNqXlBlWVMeZGh3HGxkjX1LKiO8nAu8cZHx0F4WCWmMGsw2iUKQoRLBJ6hM71G/nKvgPc09U5DxBIIEFIuDYzxY7du4nFIoxfnaakzMTUNVpaVzCaGiMqlUDaXC6PJx2GP/6YaC6HU1fD3VUxjIGLmOkMFVLFVARxBGWVEarNUo5dn6OrJIHTnWT1d77Hms4bCvgFwfPrgA2XxofY1L0OLxQK9qpAoaQ8gScsNM1A90u1tJGqSkgK5qam2eIWWIxKk+UQ0SXDRhmjjs3DZRpql4EoL0NLSX58yWGX6zLTdz/Jbz9PsmPlfCEKCpAUeC6kRob4ffIeUtWNFArTFE2V0ngt03mbiZkUjghjaQq29LDsItJ12O/mqUBD+Jkf1vhRuISJguAnMXASIXJzDkpa8mpDNdsMDXXrkyS3bqFjZfudAJKpiTFOf+0puiYmkcYsanMELaJhaRq251E8Y6FiUAjpCM8inU7jWRZFTeJKFQeNPz+2g1N//wsH07NkpIEVCXPBVRhc2cb2hx6hqm0JnZ0dNDUsugWw4IK5uRne2bOHlWcHKJuZREFnxFBY5EkUXUO3XKZq6riycyeZVIr85bPc9Y/TWL6MuiQjdU7t/QZ/+93rPK9HKSxbRmZpK5MFl3hlJR0dHSxfsZzGhgYikejnAXw/cIoF/vD1Zym/NIRu6FTlM0xV1tBczKOdH0T1bK7HKhjq66Usb5H49BTXRlK4vp8IyVXD4KfLmlhe30Jf8l5K726iprKORCIWeE0ikaCxsRHTNOdNaSEHFhSQwmPgxHGO/elt5q6O4dVVUd+4GFMTzB7+BcrVSSrtAteraqkJh1l7+TwXLEjFy5hd2s7R4RGuJOLseuIJlnd0sKSlhaqqSiLRkqA46bqOYRi3nPF2gJvnActiaGiIiVSKbD6HV7Ao2A6FbBonl4ZsAQoO3uw0kYlhVMPEbu0g1LyIzFwWT7osXrw4kLu+vp6Qv6NuHFYW+pvW/EUHEt8dbdsOmuu6QbNdN3A/27Kx7Dye5eAWPdJeETefxTAi1NZUEzZD2LZLNBqlurr6ptQLAe8E+DduXpf/D7wuCgAAAABJRU5ErkJggg==" draggable="false" style=" width: 32px; height: 21.44px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;">    
      <img alt="" src="data:image/png;base64,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" draggable="false" style=" width: 32px; height: 19.75px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; opacity: 1;">
    <br>
      gtfs.es
    </p>
    <h1> haciendo fácil la vida de la gente</h1>
    `;
  }
}
customElements.define('view-cabezera', Cabezera);
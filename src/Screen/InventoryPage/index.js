import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import './style.css';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CreateIcon from '@material-ui/icons/Create';
import SaveIcon from '@material-ui/icons/SaveOutlined';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import {
    fade,
} from '@material-ui/core/styles';

const drawerWidth = 240;
const useStylesTextInput = makeStyles((theme) => ({
    root: {
        border: '1px solid #e2e2e1',
        overflow: 'hidden',

        borderRadius: 4,
        backgroundColor: '#fcfcfb',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
            backgroundColor: '#fff',
        },
        '&$focused': {
            backgroundColor: '#fff',
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main,
        },
        textField: {
            marginRight: '20px',
        }
    },
    focused: {},
    textField: {
        marginRight: '20px',
        width: '83px',
    },
    div: {
        display: 'flex',
    }
}));
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    saveBtn: {
        backgroundColor: '#6b7ace',
        color: 'white',
        borderRadius: '20px',
        fontSize: '15px',
        padding: '10px 30px',
        '&:hover': {
            color: 'black',
        },
        '&$focused': {
            color: 'black',
        }
    },
    listRoot: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxShadow: '0 0px 21px -6px #7777776e',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: '80px',
        // [theme.breakpoints.up('sm')]: {
        //     width: theme.spacing(7) + 1,
        // },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...theme.mixins.toolbar,
        padding: '18px 15px 20px 15px',
    },
    content: {
        flexGrow: 1,
        // padding: '40px',
    },
    inventoryBuilder: {
        color: '#333333',
        fontSize: '30px',
        fontWeight: '600',
        letterSpacing: 0,
        lineHeight: '48px',
        textAlign: 'left',
        padding: '20px 50px',
        boxShadow: '0 -25px 85px 0px #7777776e',
    },
    logo: {
        // width: '40px',
        // height: '40px',
        padding: '10px 18px',
        background: '#018fb5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '26px',
        color: '#fcfcfb',
        fontSize: '21px',
    },
    menuItems: {
        paddingLeft: '11px',
    }
}));



export default function InventoryPage() {
    const classes = useStyles();
    const useStylesInput = useStylesTextInput();
    const [items, setItems] = React.useState([]);
    React.useEffect(() => {
        console.log('useEffect:', JSON.parse(localStorage.getItem('InvertoryItem')));
        if (JSON.parse(localStorage.getItem('InvertoryItem')) === null) {
            setItems([
                {
                    itemNo: 1,
                    itemName: 'Vegetables & Fruits',
                    availability: true,
                    collapsed: true,
                    subItems: [
                        {
                            itemNo: 11,
                            itemName: 'Vegetables',
                            availability: true,
                            collapsed: false,
                            subItems: [
                                {
                                    itemNo: 111,
                                    itemName: 'Cucumber',
                                    color: '#00B121',
                                    option: 'Small',
                                    sku_id: 'SKU02596051',
                                    stock: '10',
                                    unlimited: false,
                                    edit: false,
                                },
                                {
                                    itemNo: 112,
                                    itemName: 'Green Chilli',
                                    color: '#00B122',
                                    option: 'Medium',
                                    sku_id: 'SKU02596052',
                                    stock: '23',
                                    unlimited: false,
                                    edit: false,
                                },
                                {
                                    itemNo: 113,
                                    itemName: 'Carrot',
                                    color: '#00B123',
                                    option: 'Large',
                                    sku_id: 'SKU02596053',
                                    stock: '34',
                                    unlimited: false,
                                    edit: false,
                                },
                                {
                                    itemNo: 114,
                                    itemName: 'Pottato',
                                    color: '#00B124',
                                    option: 'Medium',
                                    sku_id: 'SKU02596054',
                                    stock: '50',
                                    unlimited: false,
                                    edit: false,
                                }
                            ],
                        },
                        {
                            itemNo: 12,
                            itemName: 'Fruits',
                            availability: true,
                            collapsed: false,
                            subItems: [
                                {
                                    itemNo: 121,
                                    itemName: 'Pineapple',
                                    color: '#00B125',
                                    option: 'Large',
                                    sku_id: 'SKU02596055',
                                    stock: '100',
                                    unlimited: false,
                                    edit: false,
                                },
                                {
                                    itemNo: 122,
                                    itemName: 'Banana',
                                    color: '#00B126',
                                    option: 'Small',
                                    sku_id: 'SKU02596056',
                                    stock: '250',
                                    unlimited: false,
                                    edit: false,
                                },
                                {
                                    itemNo: 123,
                                    itemName: 'Green Apple',
                                    color: '#00B127',
                                    option: 'Large',
                                    sku_id: 'SKU02596057',
                                    stock: '130',
                                    unlimited: false,
                                    edit: false,
                                },
                            ],
                        }
                    ],
                },
                {
                    itemNo: 2,
                    itemName: 'Breads & Dairy',
                    availability: true,
                    collapsed: false,
                    subItems: [
                        {
                            itemNo: 21,
                            itemName: 'Breads',
                            availability: true,
                            collapsed: false,
                            subItems: [
                                {
                                    itemNo: 211,
                                    itemName: 'Wheat Bread',
                                    color: '#00B128',
                                    option: 'Small',
                                    sku_id: 'SKU02596058',
                                    stock: '10',
                                    unlimited: false,
                                    edit: false,
                                },
                                {
                                    itemNo: 212,
                                    itemName: 'Brown Bread',
                                    color: '#00B129',
                                    option: 'Medium',
                                    sku_id: 'SKU02596059',
                                    stock: '23',
                                    unlimited: false,
                                    edit: false,
                                },
                                {
                                    itemNo: 213,
                                    itemName: 'Banana Bread',
                                    color: '#00B130',
                                    option: 'Large',
                                    sku_id: 'SKU02596061',
                                    stock: '34',
                                    unlimited: false,
                                    edit: false,
                                },
                                {
                                    itemNo: 214,
                                    itemName: 'Multigrain Bread',
                                    color: '#00B131',
                                    option: 'Medium',
                                    sku_id: 'SKU02596062',
                                    stock: '50',
                                    unlimited: false,
                                    edit: false,
                                }
                            ],
                        },
                        {
                            itemNo: 22,
                            itemName: 'Dairy',
                            availability: true,
                            collapsed: false,
                            subItems: [
                                {
                                    itemNo: 221,
                                    itemName: 'Milk',
                                    color: '#00B132',
                                    option: 'Small',
                                    sku_id: 'SKU02596063',
                                    stock: '2',
                                    unlimited: false,
                                    edit: false,
                                },
                                {
                                    itemNo: 222,
                                    itemName: 'Curd',
                                    color: '#00B133',
                                    option: 'Small',
                                    sku_id: 'SKU02596064',
                                    stock: '5',
                                    unlimited: false,
                                    edit: false,
                                },
                                {
                                    itemNo: 223,
                                    itemName: 'Ghee',
                                    color: '#00B134',
                                    option: 'Small',
                                    sku_id: 'SKU02596065',
                                    stock: '1',
                                    unlimited: false,
                                    edit: false,
                                },
                            ],
                        },
                    ],
                },
                {
                    itemNo: 3,
                    itemName: 'Snacks',
                    availability: true,
                    collapsed: false,
                    subItems: [
                        {
                            itemNo: 31,
                            itemName: 'Chips',
                            color: '#00B135',
                            option: 'Small',
                            sku_id: 'SKU02596066',
                            stock: '10',
                            unlimited: false,
                            edit: false,
                        },
                        {
                            itemNo: 32,
                            itemName: 'Biscuit',
                            color: '#00B136',
                            option: 'Medium',
                            sku_id: 'SKU02596067',
                            stock: '23',
                            unlimited: false,
                            edit: false,
                        },
                    ],
                },
                {
                    itemNo: 4,
                    itemName: 'Cleaning and Household',
                    availability: true,
                    collapsed: false,
                    subItems: [
                        {
                            itemNo: 41,
                            itemName: 'Bleaching powder',
                            color: '#00B137',
                            option: 'Large',
                            sku_id: 'SKU02596068',
                            stock: '3',
                            unlimited: false,
                            edit: false,
                        }
                    ],
                },
            ]);
        } else {
            setItems(JSON.parse(localStorage.getItem('InvertoryItem')));
        }
    }, []);
    React.useEffect(() => {
        localStorage.setItem('InvertoryItem', JSON.stringify(items));
    }, [items])



    const toggleEdit = (edit, itemNo) => {
        console.log('toggleEdit itemNo: ', itemNo);
        items.forEach((item, i) => {
            if (item.subItems && item.subItems.length > 0) {
                item.subItems.forEach((item1, i) => {
                    if (item1.subItems && item1.subItems.length > 0) {
                        item1.subItems.forEach((item2, i) => {
                            if (item2.itemNo === itemNo) {
                                item2.edit = !edit;
                            }
                        })
                    } else {
                        if (item1.itemNo === itemNo) {
                            item1.edit = !edit;
                        }
                    }
                })
            }
        })
        setItems([...items]);
    }
    const toggleExpander = (collapsed, itemNo) => {
        console.log('itemNo: ', itemNo);
        items.forEach((item, i) => {
            if (item.itemNo === itemNo) {
                item.collapsed = !collapsed;
            } else {
                if (item.subItems && item.subItems.length > 0) {
                    item.subItems.forEach((item1, i) => {
                        if (item1.itemNo === itemNo) {
                            item1.collapsed = !collapsed;
                        } else {
                            if (item1.subItems && item1.subItems.length > 0) {
                                item1.subItems.forEach((item2, i) => {
                                    if (item2.itemNo === itemNo) {
                                        item2.collapsed = !collapsed;
                                    }
                                })
                            }
                        }
                    })
                }
            }

        });
        setItems([...items]);
    }

    const handleTextStock = (value, itemNo) => {
        console.log('handleTextStock itemNo: ', value);
        items.forEach((item, i) => {
            if (item.subItems && item.subItems.length > 0) {
                item.subItems.forEach((item1, i) => {
                    if (item1.subItems && item1.subItems.length > 0) {
                        item1.subItems.forEach((item2, i) => {
                            if (item2.itemNo === itemNo) {
                                item2.stock = value;
                            }
                        })
                    } else {
                        if (item1.itemNo === itemNo) {
                            item1.stock = value;
                        }
                    }
                })
            }
        });
        setItems([...items]);
    }
    const handleChangeStock = (unlimited, itemNo) => {
        console.log('handleChangeStock itemNo: ', itemNo);
        items.forEach((item, i) => {
            if (item.subItems && item.subItems.length > 0) {
                item.subItems.forEach((item1, i) => {
                    if (item1.subItems && item1.subItems.length > 0) {
                        item1.subItems.forEach((item2, i) => {
                            if (item2.itemNo === itemNo) {
                                item2.unlimited = !unlimited;
                            }
                        })
                    } else {
                        if (item1.itemNo === itemNo) {
                            item1.unlimited = !unlimited;
                        }
                    }
                })
            }

        });
        setItems([...items]);
    };
    const handleChangeAvailability = (availability, itemNo) => event => {
        console.log('itemNo: ', itemNo);
        items.forEach((item, i) => {
            if (item.itemNo === itemNo) {
                item.availability = !availability;
            } else {
                if (item.subItems && item.subItems.length > 0) {
                    item.subItems.forEach((item1, i) => {
                        if (item1.itemNo === itemNo) {
                            item1.availability = !availability;
                        } else {
                            if (item1.subItems && item1.subItems.length > 0) {
                                item1.subItems.forEach((item2, i) => {
                                    if (item2.itemNo === itemNo) {
                                        item2.availability = !availability;
                                    }
                                })
                            }
                        }
                    })
                }
            }

        });
        setItems([...items]);
    };
    const renderRow = (item, i) => {

        return (
            <>
                <tr key={"main-" + i} >
                    <td className={'leftAlign subItem1'} colSpan={5}>{(item.itemName)}</td>
                    <td colSpan={1} className={'action'}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={item.availability}
                                    onChange={handleChangeAvailability(item.availability, item.itemNo)}
                                    value={item.availability}
                                />
                            }
                            label="Availability"
                            className={'availability'}
                        />
                        {/* <FormControlLabel
                            control={
                                <Switch
                                    disableRipple
                                    checked={item.availability}
                                    onChange={() => { handleChangeAvailability(item.availability, item.itemNo) }}
                                    value={item.availability}
                                />
                            }
                            label="Availability"
                        /> */}
                        {item.collapsed ? <IconButton color="primary" component="span" onClick={() => {
                            toggleExpander(item.collapsed, item.itemNo)
                        }}>
                            < RemoveIcon />
                        </IconButton> : <IconButton color="primary" component="span" onClick={() => {
                            toggleExpander(item.collapsed, item.itemNo)
                        }}>
                                <AddIcon />
                            </IconButton>}
                    </td>
                </tr>

                {item.collapsed && item.subItems && item.subItems.length > 0 && item.subItems.map((item1, j) => {
                    return (
                        <>
                            {console.log('item1.sku_id: ', item1.sku_id)}
                            {item1.sku_id === undefined ?
                                <>
                                    <tr key={"subItems-" + j} >
                                        <td colSpan={5} className={'leftAlign subItem'}> {(item1.itemName)}</td>
                                        <td colSpan={1}>
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        checked={item1.availability}
                                                        onChange={handleChangeAvailability(item1.availability, item1.itemNo)}
                                                        value={item1.availability}
                                                    />
                                                }
                                                label="Availability"
                                                className={'availability'}
                                            />
                                            {item1.collapsed ? <IconButton color="primary" component="span" onClick={() => {
                                                toggleExpander(item1.collapsed, item1.itemNo)
                                            }}>
                                                < RemoveIcon />
                                            </IconButton> : <IconButton color="primary" component="span" onClick={() => {
                                                toggleExpander(item1.collapsed, item1.itemNo)
                                            }}>
                                                    <AddIcon />
                                                </IconButton>}
                                        </td>
                                    </tr>
                                    {item1.collapsed && item1.subItems && item1.subItems.length > 0 && item1.subItems.map((item2, k) => (
                                        <tr key={"subItems1-" + k} className={'text'} >
                                            <td className={'leftAlign'} colSpan={1} >{(item2.itemName)}</td>
                                            <td colSpan={1}>{(item2.color)}</td>
                                            <td colSpan={1}>{(item2.option)}</td>
                                            <td colSpan={1}>{(item2.sku_id)}</td>
                                            <td colSpan={1}>{item2.edit ?
                                                <div className={useStylesInput.div}>

                                                    <TextField
                                                        className={useStylesInput.textField}
                                                        type="number"
                                                        disableUnderline
                                                        InputProps={{
                                                            inputProps: {
                                                                max: 500, min: 0
                                                            }
                                                        }}
                                                        variant="filled"
                                                        label="Enter value"
                                                        value={item2.stock}
                                                        disabled={item2.unlimited ? true : false}
                                                        onChange={(event) => {
                                                            console.log('handleTextStock itemNo: ', event.target.value);
                                                            handleTextStock(event.target.value, item2.itemNo)
                                                        }}
                                                    />
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox
                                                                checked={item2.unlimited}
                                                                onChange={() => { handleChangeStock(item2.unlimited, item2.itemNo); }}
                                                                value={item2.unlimited}
                                                            />
                                                        }
                                                        label="Unlimited"
                                                    />
                                                </div>
                                                :
                                                item2.unlimited ? 'Unlimited' : item2.stock}
                                            </td>
                                            <td colSpan={1}>{item2.edit ?
                                                <IconButton component="span" className={classes.saveBtn} onClick={() => {
                                                    toggleEdit(item2.edit, item2.itemNo)
                                                }}>
                                                    <div style={{ marginRight: '5px' }}>Save </div> <SaveIcon fontSize="small" style={{ margiLeft: "5px" }} />
                                                </IconButton>
                                                :
                                                <IconButton color="primary" component="span" onClick={() => {
                                                    toggleEdit(item2.edit, item2.itemNo)
                                                }}>
                                                    <CreateIcon />
                                                </IconButton>
                                            }
                                            </td>
                                        </tr>
                                    ))}
                                </>
                                :
                                <tr key={"subItems1-" + i} className={'text'} >
                                    <td className={'leftAlign'} colSpan={1} >{(item1.itemName)}</td>
                                    <td colSpan={1}>{(item1.color)}</td>
                                    <td colSpan={1}>{(item1.option)}</td>
                                    <td colSpan={1}>{(item1.sku_id)}</td>
                                    <td colSpan={1}>{item1.edit ?
                                        <div className={useStylesInput.div}>

                                            <TextField
                                                className={useStylesInput.textField}
                                                type="number"
                                                disableUnderline
                                                InputProps={{
                                                    inputProps: {
                                                        max: 500, min: 0
                                                    }
                                                }}
                                                variant="filled"
                                                label="Enter value"
                                                value={item1.stock}
                                                disabled={item1.unlimited ? true : false}
                                                onChange={(event) => {
                                                    console.log('handleTextStock itemNo: ', event.target.value);
                                                    handleTextStock(event.target.value, item1.itemNo)
                                                }}
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={item1.unlimited}
                                                        onChange={() => { handleChangeStock(item1.unlimited, item1.itemNo); }}
                                                        value={item1.unlimited}
                                                    />
                                                }
                                                label="Unlimited"
                                            />
                                        </div>
                                        :
                                        item1.unlimited ? 'Unlimited' : item1.stock}
                                    </td>
                                    <td colSpan={1}>{item1.edit ?
                                        <IconButton component="span" className={classes.saveBtn} onClick={() => {
                                            toggleEdit(item1.edit, item1.itemNo)
                                        }}>
                                            <div style={{ marginRight: '5px' }}>Save </div> <SaveIcon fontSize="small" style={{ margiLeft: "5px" }} />
                                        </IconButton>
                                        :
                                        <IconButton color="primary" component="span" onClick={() => {
                                            toggleEdit(item1.edit, item1.itemNo)
                                        }}>
                                            <CreateIcon />
                                        </IconButton>
                                    }
                                    </td>
                                </tr>
                            }
                        </>
                    );
                })}
            </>
        );
    };

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <div className={classes.menuIcon} onClick={() => { open ? handleDrawerClose() : handleDrawerOpen() }}>
                        <div className={classes.logo}><b>{open ? 'Robosoft' : 'R'}</b></div>
                    </div>
                </div>
                <div className={classes.menuItems}>
                    <List >
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text} >
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.inventoryBuilder}> Inventory Builder </div>
                <div className="table-container">
                    <div className="uk-overflow-auto">
                        <table className="uk-table uk-table-hover uk-table-middle uk-table-divider">
                            <thead>
                                <tr>
                                    <th className="uk-table-shrink" >Item Name</th>
                                    <th className="uk-table-shrink" >Color</th>
                                    <th className="uk-table-shrink">Options</th>
                                    <th>Skuid</th>
                                    <th>Stocks</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.length > 0 && items.map((item, index) => {
                                    return renderRow(item, index)
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>

    );
}

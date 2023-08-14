import { peoples } from "../constant/peoples.js";

const tickets = [];
let ticketIdCounter = 0;
let lastAssignedPersonIndex = -1;

function createTicket(req, res) {
    try {
        const { issue_description, raised_by } = req.body;
        lastAssignedPersonIndex = (lastAssignedPersonIndex + 1) % (peoples.length);
        let assigned_to = peoples[lastAssignedPersonIndex].id;
        ticketIdCounter++;
        const ticket = {
            id: ticketIdCounter,
            issue_description,
            assigned_to,
            raised_by
        };
        tickets.push(ticket);
        const person = peoples.find(p => p.id === assigned_to);
        person.ticketsAssigned.push(ticketIdCounter);
        res.status(201).json({
            message: "ticket was successfuly created",
            success: true,
            data: {
                ticket_id: ticketIdCounter,
                assigned_to
            }
        });
    }
    catch (err) {
        console.log(err);
    }
}


function getPeoples(req, res) {
    try {
        return res.status(200).json({ peoples });
    }
    catch (err) {
        res.status(404).json({ error: err });
    }

}

function getTikects(req, res) {
    try{
        if (tickets.length === 0) {
            return res.status(200).json({ mesasge: "No tickets were created at" });
        }
        return res.status(200).json({ tickets });
    }
    catch(err)
    {
        res.status(500).json({ error: err });
    }
}


export { createTicket, getPeoples, getTikects };
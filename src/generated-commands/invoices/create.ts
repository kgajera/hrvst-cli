/**
 * This file was generated by running `yarn generate` and should NOT be modified.
 */
import postmanRequestCommand, {
  Request,
} from "../../utils/postman-request-command";

export const request: Request = {
  method: "POST",
  url: {
    protocol: "https",
    host: ["api", "harvestapp", "com"],
    path: ["v2", "invoices"],
    query: [
      {
        key: "client_id",
        value: "",
        description: "The ID of the client this invoice belongs to.",
      },
      {
        key: "retainer_id",
        value: "",
        description: "The ID of the retainer associated with this invoice.",
        disabled: true,
      },
      {
        key: "estimate_id",
        value: "",
        description: "The ID of the estimate associated with this invoice.",
        disabled: true,
      },
      {
        key: "number",
        value: "",
        description:
          "If no value is set, the number will be automatically generated.",
        disabled: true,
      },
      {
        key: "purchase_order",
        value: "",
        description: "The purchase order number.",
        disabled: true,
      },
      {
        key: "tax",
        value: "",
        description:
          "This percentage is applied to the subtotal, including line items and discounts. Example: use 10.0 for 10.0%.",
        disabled: true,
      },
      {
        key: "tax2",
        value: "",
        description:
          "This percentage is applied to the subtotal, including line items and discounts. Example: use 10.0 for 10.0%.",
        disabled: true,
      },
      {
        key: "discount",
        value: "",
        description:
          "This percentage is subtracted from the subtotal. Example: use 10.0 for 10.0%.",
        disabled: true,
      },
      {
        key: "subject",
        value: "",
        description: "The invoice subject.",
        disabled: true,
      },
      {
        key: "notes",
        value: "",
        description: "Any additional notes to include on the invoice.",
        disabled: true,
      },
      {
        key: "currency",
        value: "",
        description:
          "The currency used by the invoice. If not provided, the client’s currency will be used. See a list of supported currencies",
        disabled: true,
      },
      {
        key: "issue_date",
        value: "",
        description: "Date the invoice was issued. Defaults to today’s date.",
        disabled: true,
      },
      {
        key: "due_date",
        value: "",
        description:
          "Date the invoice is due. Defaults to the issue_date if no payment_term is specified.",
        disabled: true,
      },
      {
        key: "payment_term",
        value: "",
        description:
          "The timeframe in which the invoice should be paid. Defaults to custom. Options: upon receipt, net 15, net 30, net 45, or net 60.",
        disabled: true,
      },
      {
        key: "line_items[0]kind",
        value: "",
        description: "The name of an invoice item category.",
        disabled: true,
      },
      {
        key: "line_items[0]description",
        value: "",
        description: "Text description of the first line item.",
        disabled: true,
      },
      {
        key: "line_items[0]unit_price",
        value: "",
        description: "The individual price per unit.",
        disabled: true,
      },
      {
        key: "line_items[0]quantity",
        value: "",
        description: "The unit quantity of the item.",
        disabled: true,
      },
      {
        key: "line_items[0]taxed",
        value: "",
        description:
          "Whether the invoice’s tax percentage applies to this line item.",
        disabled: true,
      },
      {
        key: "line_items[0]taxed2",
        value: "",
        description:
          "Whether the invoice’s tax2 percentage applies to this line item.",
        disabled: true,
      },
      {
        key: "line_items[1]kind",
        value: "",
        description: "The name of an invoice item category.",
        disabled: true,
      },
      {
        key: "line_items[1]description",
        value: "",
        description: "Text description of the second line item.",
        disabled: true,
      },
      {
        key: "line_items[1]unit_price",
        value: "",
        description: "The individual price per unit.",
        disabled: true,
      },
      {
        key: "line_items[1]quantity",
        value: "",
        description: "The unit quantity of the item.",
        disabled: true,
      },
      {
        key: "line_items[1]taxed",
        value: "",
        description:
          "Whether the invoice’s tax percentage applies to this line item.",
        disabled: true,
      },
      {
        key: "line_items[1]taxed2",
        value: "",
        description:
          "Whether the invoice’s tax2 percentage applies to this line item.",
        disabled: true,
      },
    ],
  },
};
export const { command, aliases, describe, builder, handler } =
  postmanRequestCommand({
    command: "create",
    describe: "Creates a new invoice object",
    request,
  });
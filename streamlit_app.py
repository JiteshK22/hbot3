import pandas as pd
import streamlit as st

st.set_page_config(page_title="MeWashkar Ops Console", page_icon="🧺", layout="wide")

STATUS_COLORS = {
    "PENDING": "#9CA3AF",
    "PICKUP_ASSIGNED": "#3B82F6",
    "PICKED": "#F59E0B",
    "PROCESSING": "#8B5CF6",
    "READY": "#14B8A6",
    "OUT_FOR_DELIVERY": "#EAB308",
    "DELIVERED": "#22C55E",
    "ISSUE": "#EF4444",
}

st.title("🧺 MeWashkar — Real-Time Operations Dashboard")
st.caption("Premium laundry management + logistics platform prototype")

with st.sidebar:
    st.header("Control Panel")
    role = st.selectbox(
        "Role View",
        ["Admin", "Operations Manager", "Rider", "Workshop Staff", "Customer"],
        index=1,
    )
    st.write("Current view:", f"**{role}**")

kpi_1, kpi_2, kpi_3, kpi_4 = st.columns(4)
kpi_1.metric("Total Orders Today", "128", "+12")
kpi_2.metric("Active Riders", "12", "+2")
kpi_3.metric("Revenue Today", "₹45,200", "+8.4%")
kpi_4.metric("Delayed Orders", "5", "-1")

st.markdown("---")

orders_df = pd.DataFrame(
    [
        ["ORD-1001", "Aarav", "PICKUP_ASSIGNED", "₹320", "10:15", "12:00", "R-04"],
        ["ORD-1002", "Isha", "PROCESSING", "₹540", "09:35", "14:00", "R-02"],
        ["ORD-1003", "Rahul", "OUT_FOR_DELIVERY", "₹210", "08:50", "11:30", "R-03"],
        ["ORD-1004", "Nidhi", "ISSUE", "₹760", "07:10", "10:30", "R-01"],
        ["ORD-1005", "Kabir", "DELIVERED", "₹430", "06:20", "09:15", "R-05"],
    ],
    columns=["Order", "Customer", "Status", "Amount", "Created", "ETA", "Rider"],
)

st.subheader("🔥 Live Orders")


def style_status(val: str):
    color = STATUS_COLORS.get(val, "#6B7280")
    return f"background-color: {color}; color: white; font-weight: 600"

st.dataframe(
    orders_df.style.map(style_status, subset=["Status"]),
    use_container_width=True,
    hide_index=True,
)

col_a, col_b = st.columns(2)

with col_a:
    st.subheader("🚚 Rider Geo Tracking")
    riders_df = pd.DataFrame(
        [
            ["R-01", "Aman", "ACTIVE", 18.5302, 73.8451, "2 pickups"],
            ["R-02", "Neha", "ACTIVE", 18.5198, 73.8642, "1 pickup"],
            ["R-03", "Yash", "DELIVERING", 18.5152, 73.8789, "3 drops"],
        ],
        columns=["Rider ID", "Name", "State", "Lat", "Lng", "Queue"],
    )
    st.dataframe(riders_df, use_container_width=True, hide_index=True)

with col_b:
    st.subheader("🧠 Customer Intelligence")
    intelligence_df = pd.DataFrame(
        [
            ["CUST-001", "Priya", "PLATINUM", 67, "₹29,440"],
            ["CUST-014", "Rohan", "GOLD", 24, "₹11,070"],
            ["CUST-055", "Aditi", "SILVER", 8, "₹2,160"],
        ],
        columns=["Customer ID", "Name", "Tier", "Orders", "LTV"],
    )
    st.dataframe(intelligence_df, use_container_width=True, hide_index=True)

st.subheader("💳 Subscription Engine")
subs_df = pd.DataFrame(
    [
        ["Lite Monthly", "₹999", "40 credits", "Monthly", "Active"],
        ["Family Plus", "₹1,999", "100 credits", "Monthly", "Active"],
        ["Business Pro", "₹6,999", "400 credits", "Quarterly", "Pilot"],
    ],
    columns=["Plan", "Price", "Credits", "Cycle", "Status"],
)
st.dataframe(subs_df, use_container_width=True, hide_index=True)

st.subheader("🔍 Item Traceability")
trace_order = st.selectbox("Track Order", orders_df["Order"].tolist())
st.write(
    f"**{trace_order}** → Pickup → Sorting → Washing → Ironing → QC → Dispatch → Delivered"
)

st.markdown("---")
st.caption(
    "Prototype only: integrates dashboard concepts, status tags, geo tracking, intelligence, and subscription visibility."
)
